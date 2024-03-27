import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const MySettingsForm = () => {
  return (
    <div className='grid items-start gap-4'>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' defaultValue='badawy@example.com' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' defaultValue='@badawy' />
      </div>
      <Button type='submit'>Save changes</Button>
    </div>
  );
};
