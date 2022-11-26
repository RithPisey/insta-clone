import Image from "next/image";
import {
	MagnifyingGlassIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	Bars3Icon,
} from "@heroicons/react/24/outline/";
import { HomeIcon } from "@heroicons/react/24/solid";
import Home from "../pages";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
	const { data: session } = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	const router = useRouter();
	return (
		<div className=' sticky shadow-sm border-b bg-white top-0 z-50'>
			<div className='flex justify-between  max-w-6xl mx-5 xl:mx-auto'>
				{/* Left */}
				<div
					onClick={() => router.push("/")}
					className='p-3 flex-shrink-0 self-center relative w-24 cursor-pointer md:hidden '
				>
					{/* https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png */}
					{/* https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png */}
					<Image
						priority
						src=' https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png'
						width={35}
						height={35}
						alt=''
					/>
				</div>
				<div
					onClick={() => router.push("/")}
					className='hidden w-24 self-center relative p-3 cursor-pointer md:inline-grid'
				>
					<Image
						priority
						src=' https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
						width={100}
						height={100}
						alt=''
					/>
				</div>
				{/* Middle */}
				<div className='max-w-xs'>
					<div className='relative mt-1 p-3 rounded-md'>
						<div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
							<MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
						</div>
						<input
							className='bg-gray-50 block w-full pl-10 p-2 border-gray-500 rounded-md focus:ring-black focus:border-black sm:text-sm '
							type='text'
							placeholder='Search'
						/>
					</div>
				</div>
				{/* Right */}
				<div className='flex items-center justify-end space-x-4'>
					<HomeIcon onClick={() => router.push("/")} className=' navBtn' />
					<Bars3Icon className='h-5 w-5 md:hidden' />
					{session ? (
						<>
							<div className='relative navBtn'>
								<PaperAirplaneIcon className='navBtn -rotate-45' />
								<div className='w-4 h-4 absolute -top-1 -right-1 text-xs bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
									3
								</div>
							</div>
							<PlusCircleIcon
								onClick={() => setOpen(true)}
								className='navBtn'
							/>
							<UserGroupIcon className='navBtn' />
							<HeartIcon className='navBtn' />
							<img
								onClick={signOut}
								className=' h-10 w-10 rounded-full cursor-pointer'
								src={session?.user?.image}
								alt='profile page'
							/>
						</>
					) : (
						<button onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
