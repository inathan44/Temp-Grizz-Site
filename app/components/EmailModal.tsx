'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Shadcn ui imports
import { useToast } from '@/components/ui/use-toast';

// Next ui Imports
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from '@nextui-org/react';

// zod + react hook form
import { LeadGenSchema, leadGen } from '../models/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function EmailModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadGenSchema>({
    mode: 'onTouched',
    resolver: zodResolver(leadGen),
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const { toast } = useToast();

  const onSubmit = async (
    data: {
      message: string;
      name: string;
      email: string;
      phoneNumber: number;
    },
    onClose: () => void
  ) => {
    setLoading(true);
    try {
      setEmailError(false);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({ description: 'message sent.', duration: 3000 });

      reset();
      onClose();
    } catch (error) {
      console.error(error);
      setEmailError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color='primary'
        radius='full'
        className='bg-grizz-red font-semibold px-10 lg:text-lg lg:font-normal'
      >
        Connect with the Grizz Team
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='center'
        className='mx-3'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1 font-normal text-sm text-center'>
                Learn more about what Grizz can offer your business
              </ModalHeader>
              {emailError && (
                <p className='text-center text-grizz-red'>
                  Error sending email, please try again later
                </p>
              )}
              <form onSubmit={handleSubmit((data) => onSubmit(data, onClose))}>
                <ModalBody>
                  <Input
                    autoFocus
                    label='Name'
                    placeholder='Enter your name'
                    variant='bordered'
                    {...register('name')}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                    name='name'
                  />
                  <Input
                    label='Email'
                    placeholder='Enter your email'
                    variant='bordered'
                    {...register('email')}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    name='email'
                  />
                  <Input
                    label='Phone number'
                    placeholder='Enter your phone number'
                    variant='bordered'
                    {...register('phoneNumber')}
                    isInvalid={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                    name='phoneNumber'
                  />
                  <Textarea
                    label='Message'
                    labelPlacement='inside'
                    placeholder='Enter your message'
                    variant='bordered'
                    {...register('message')}
                    name='message'
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color='primary'
                    className='px-8 bg-grizz-red font-semibold'
                    radius='full'
                    isLoading={loading}
                    type='submit'
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
