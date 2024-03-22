import React from 'react';
import { AppWrapper } from '../Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

export const AdminApp = () => {
  return (
    <AppWrapper>
      <Tabs defaultValue='all'>
        <div className='flex items-center px-4 py-2'>
          <h1 className='text-xl font-bold'>Inbox</h1>
          <TabsList className='ml-auto'>
            <TabsTrigger
              value='all'
              className='text-zinc-600 dark:text-zinc-200'
            >
              All mail
            </TabsTrigger>
            <TabsTrigger
              value='unread'
              className='text-zinc-600 dark:text-zinc-200'
            >
              Unread
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <div className='bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <form>
            <div className='relative'>Search</div>
          </form>
        </div>
        <TabsContent value='all' className='m-0'>
          Mail list
        </TabsContent>
        <TabsContent value='unread' className='m-0'>
          Unread mail list
        </TabsContent>
      </Tabs>
    </AppWrapper>
  );
};
