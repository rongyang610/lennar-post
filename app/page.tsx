import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex gap-2">
        <div className="mr-0.5">WE&#39;RE HIRING</div>
        <div>Visit our careers page</div>
        <Image
          alt="chevron right"
          height={20}
          src="/chevron-right.svg"
          width={20}
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="flex flex-col">
          A better way to
          <span>ship web apps</span>
        </h1>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Start free trial</button>
        </form>
        <span>
          Start your free 14-day trial, no credit card necessary. By providing
          your email, you agree to our{" "}
          <Link href="/terms">terms or service</Link>.
        </span>
      </div>
    </section>
  );
}
