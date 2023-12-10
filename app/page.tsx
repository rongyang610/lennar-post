import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex h-full flex-col justify-center bg-[url('/illustration.png')] bg-auto bg-right bg-no-repeat">
      <div className="max-w-[592px]">
        <div className="flex w-fit gap-4 rounded-[14px] bg-black py-1 pl-1 pr-2">
          <h5 className="h-fit rounded-[10px] bg-[#6366F1] px-3 py-0.5 text-xs">
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
        <div className="flex flex-col gap-5">
          <h1 className="flex flex-col text-6xl">
            A better way to
            <span>ship web apps</span>
          </h1>
          <p>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Start free trial</button>
          </form>
          <span>
            Start your free 14-day trial, no credit card necessary. By providing
            your email, you agree to our{' '}
            <Link href="/terms">terms or service</Link>.
          </span>
        </div>
      </div>
    </section>
  )
}
