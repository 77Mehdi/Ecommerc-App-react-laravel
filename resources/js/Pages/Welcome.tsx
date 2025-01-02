import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
}: PageProps<{}>) {
  

    return (
       <>
        <AuthenticatedLayout>
            <Head title="Welcome" />
            <div className="hero bg-gray-100 min-h-[300px] text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
      
        {/* <div className=' flex justify-center text-[200px] text-red-700 bg-white'> heloo betchh</div> */}
      
       </>
    );
}
