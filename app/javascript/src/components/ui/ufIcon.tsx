import React, { ReactElement } from 'react';

export interface UfIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  title?: string;
  notify?: boolean;
}

export const UfIcon = React.forwardRef<HTMLButtonElement, UfIconProps>(
  ({ icon, title, notify, ...props }, ref) => {
    const StyledIcon = () => React.cloneElement(icon, { size: 24 });

    return (
      <button ref={ref} {...props}>
        <div className='relative w-24 h-16 m-1 bg-background rounded-md flex flex-col justify-center items-center shadow-md gap-2'>
          <StyledIcon />
          <p className='text-xs'>{title}</p>
          {notify && (
            <span className='w-4 h-4 bg-red-600 rounded-full absolute -right-1 -top-1' />
          )}
        </div>
      </button>
    );
  }
);
UfIcon.displayName = 'UfIcon';
