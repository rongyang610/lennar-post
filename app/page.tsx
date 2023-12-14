import Image from 'next/image'
import Link from 'next/link'

import EmailForm from '@/components/EmailForm'

export default function Home() {
  return (
    <section className="relative flex h-full overflow-visible md:items-center md:overflow-hidden">
      <Image
        alt="dashboard"
        className="absolute bottom-[-160px] left-0 right-0 z-[-1] m-auto mx-auto my-0 h-[343px] w-[344px] sm:bottom-[-100px] md:bottom-auto md:left-auto md:right-[-325px] md:mx-0 md:my-auto md:h-[624px] md:w-[625px] lg:right-[-100px] xl:right-0"
        src="/illustration.png"
        width={625}
        height={624}
      />
      <div className="flex max-w-[592px] flex-col gap-4 md:justify-center md:gap-6">
        <div className="flex w-fit gap-4 rounded-[14px] bg-black py-1 pl-1 pr-2">
          <h5 className="h-fit rounded-[10px] bg-indigo-500 px-3 py-0.5 text-xs">
            WE&#39;RE HIRING
          </h5>
          <div className="flex gap-2">
            <span className="text-sm">Visit our careers page</span>
            <Image
              alt="chevron right"
              height={20}
              src="/chevron-right.svg"
              width={20}
            />
          </div>
        </div>
        <div className="mb-1 flex flex-col gap-3 md:max-w-[77%] md:gap-5">
          <h1 className="flex flex-col text-4xl font-extrabold md:text-5xl lg:text-6xl">
            A better way to
            <span className="text-indigo-400">ship web apps</span>
          </h1>
          <p className="text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <EmailForm />
          <span className="text-sm text-gray-300">
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our{' '}
            <Link href="/terms" className="font-medium text-white">
              terms or service
            </Link>
            .
          </span>
        </div>
      </div>
    </section>
  )
}
