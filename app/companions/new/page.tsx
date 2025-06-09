import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companions.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  // If the user is not authenticated, redirect to sign-in page

  const canCreateCompanion = await newCompanionPermissions();
  
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? ( 
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article> ) : (
        <article className="companion-limit">
            <Image
              src="/images/limit.svg"
              alt="Companion limit"
              width={360}
              height={230} 
            />
            <div className="cta-badge"> Upgrade Your Plan</div>
            <h1>You've Reached Your Limit</h1>
            <p>You have reached the limit of companions you can create with your current plan. Please upgrade to create more companions and explore premium features.</p>
            <Link href='/subscription' className='btn-primary w-full justify-center'>Upgrade My Plan</Link>
        </article>

      )}
    </main>
  )
}

export default NewCompanion