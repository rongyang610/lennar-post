import Image from 'next/image'
import Link from 'next/link'

import EmailForm from '@/components/EmailForm'

export default function Home() {
  return (
    <section className="flex md:items-center h-full overflow-visible md:overflow-hidden relative">
      <Image
        alt="dashboard"
        className="absolute m-auto w-[344px] h-[343px] md:w-auto md:h-auto my-0 md:my-auto mx-auto md:mx-0 left-0 md:left-auto right-0 bottom-[-160px] sm:bottom-[-100px] md:bottom-auto md:right-[-325px] lg:right-[-100px] xl:right-0 z-[-1]"
        src="/illustration.png"
        width={625}
        height={624}
      />
      <div className="flex flex-col md:justify-center gap-4 md:gap-6 max-w-[592px]">
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
        <div className="flex flex-col gap-3 md:gap-5 mb-1 md:max-w-[77%]">
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-extrabold">
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
          <span className="text-gray-300 text-sm">
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our{' '}
            <Link href="/terms" className="text-white font-medium">
              terms or service
            </Link>
            .
          </span>
        </div>
      </div>
    </section>
  )
}
