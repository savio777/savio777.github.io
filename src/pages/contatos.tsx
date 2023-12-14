import { GetStaticProps } from "next";
import Head from "next/head";
import CopyButton from "@/components/common/CopyButton";
import getData from "@/utils/api";
import { IHomeData } from "@/types/Home";

export default function Contatos({ data }: { data: IHomeData }) {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>

      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-16 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>

        <ul className="table mx-auto space-y-6 md:space-y-8">
          {data?.contacts?.length && data.contacts.map(contact => (
            <li key={contact.title} className="md:text-xl">
              <span className="font-bold">{contact.title}</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a className="text-sm md:text-lg text-slate-300 underline truncate" target="_blank" href={contact.link} rel="noreferrer">{contact.linkLabel}</a>
                <CopyButton textToCopy={contact.link} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ data: IHomeData }> = async () => {
  const data = await getData()

  return {
    props: {
      data
    }
  }
}