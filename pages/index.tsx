import { useState } from 'react'

import Head from 'next/head'

import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElements'

import Clouds1 from '@/assets/1465844993.svg'
import Clouds2 from '@/assets/nube.svg'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0)

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A project to generate some inspirational quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator Modal Pop-up*/}
        {/* QuoteGeneratorModal */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href='https://zenquotes.io' target='blank' rel='noopener noreferrer'>ZenQuotes API</FooterLink>
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>


        {/* Background Images*/}
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="Cloud background 1"
        />
        <BackgroundImage2
          src={Clouds2}
          height="300"
          alt="Cloud background 2"
        />

        {/* Footer*/}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Develop with 💘 by <FooterLink href='https://youtube.com/brianhhough' target='blank' rel='noopener noreferrer'>@BrianHHugh</FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>

    </>
  )
}

{/* <main className={styles.main}>
  <div>Hello</div>
  <h3>Great job running Next.js</h3>
</main> */}