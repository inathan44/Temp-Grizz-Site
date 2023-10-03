'use client';
import React, { useState } from 'react';

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
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

export default function EmailModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LeadGenSchema>({
    mode: 'onTouched',
    resolver: zodResolver(leadGen),
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function delayedFunction() {
    await delay(2000); // Wait for 2 seconds
  }

  const onSubmit = async (
    data: {
      name: string;
      email: string;
      phoneNumber: number;
    },
    onClose: () => void
  ) => {
    console.log('data:', data);
    setLoading(true);
    try {
      await delayedFunction();
      toast({ description: 'message sent.', duration: 3000 });

      reset();
      onClose();
    } catch (error) {
      console.error(error);
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
        Join Email List
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
              <form onSubmit={handleSubmit((data) => onSubmit(data, onClose))}>
                <ModalBody>
                  <Input
                    autoFocus
                    label='Name'
                    placeholder='enter your name'
                    variant='bordered'
                    {...register('name')}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                  />
                  <Input
                    label='Email'
                    placeholder='Enter your email'
                    variant='bordered'
                    {...register('email')}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                  />
                  <Input
                    label='Phone number'
                    placeholder='Enter your phone number'
                    variant='bordered'
                    {...register('phoneNumber')}
                    isInvalid={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                  />
                  <Textarea
                    label='Message'
                    labelPlacement='inside'
                    placeholder='Enter your message'
                    variant='bordered'
                    {...register('message')}
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
                    Join email list
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
