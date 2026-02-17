import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center md:flex-row flex-col gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-base text-gray-500">
                            &copy; {new Date().getFullYear()} WAKnowledgeBot. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            Terms
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            Privacy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
