import Loading from '@/components/ui/Loading';
import React from 'react';

const loading = () => {
    return (
       <div className='mx-auto flex items-center justify-center min-h-screen'>
        <Loading/>
       </div>
    );
};

export default loading;