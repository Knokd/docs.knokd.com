'use client'
import {Button} from "@/components/Button"

export function ContactSection () {
  return (
    <div className="flex flex-col p-4 items-center justify-center w-full min-h-[34vh] bg-[url('/images/brochure-bg.png')] bg-cover">
      <div className="text-left">
        <div className="white-top-heading">Knock on our Door</div>
        <p className="text-white text-4xl mt-[45px] mb-[23px]">Anything holding you back?</p>
        <div className="flex gap-6">
        <Button variant="cta" target="_blank" href="mailto:support@knokd.com">Email Knokd support</Button>
        <img src="/images/get-started-arrow.svg" className="transform rotate-[320deg] scale-[90%] translate-x-[-10px] translate-y-[-10px] inline-block"></img>
        </div>
      </div>
    </div>
  )
}