// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Slide,
  Appear,
  Link,
  CodePane,
  Layout,
  Fill,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  hero: require('../assets/foundation-for-emails-hero-02.png'),
  statisticsMobileDesktop: require('../assets/litmus-statistics-mobile-desktop.png'),
  statisticsMobileDesktopReal: require('../assets/litmus-statistics-gmail-mobile.png'),
  statisticsOutlook: require('../assets/litmus-email-client-market-share-2017-outlook.jpg'),
  statisticsMarketShare: require('../assets/litmus-statistics-email-client-market-share.png'),
  howsWritingHtmlEmails: require('../assets/kid-crying.gif'),
  easyWork: require('../assets/easy.gif'),
  introExampleLitmus: require('../assets/intro-example-litmus.png'),
  paniniFolderStructure: require('../assets/panini-file-structure.png'),
  mjh: require('../assets/mjh.jpg'),
};

const codeExamples = {
  intro: require('raw-loader!../assets/code/intro.example'),
  introSource: require('raw-loader!../assets/code/intro-source.example'),
  inky: require('raw-loader!../assets/code/inky.example'),
  inkyCompiled: require('raw-loader!../assets/code/inky-compiled.example'),
  paniniLayoutsPages: require('raw-loader!../assets/code/panini-layouts-pages.example'),
  paniniPage: require('raw-loader!../assets/code/panini-page.example'),
  paniniPartials: require('raw-loader!../assets/code/panini-partials.example'),
  handlebars: require('raw-loader!../assets/code/handlebars.example'),
  paniniHandlebars: require('raw-loader!../assets/code/panini-handlebars.example'),
  paniniHelper: require('raw-loader!../assets/code/panini-helper.example'),
  paniniHelperUsage: require('raw-loader!../assets/code/panini-helper-usage.example'),
  paniniBuildInHelpers: require('raw-loader!../assets/code/panini-built-in-helpers.example'),
  foundationForEmails: require('raw-loader!../assets/code/foundation-for-emails.example'),
  gulp: require('raw-loader!../assets/code/gulp.example'),
  fluid: require('raw-loader!../../sample-project/src/pages/fluid-example.hbs'),
  mustache: require('raw-loader!../../sample-project/src/pages/mustache-example.hbs'),
  rawHelper: require('raw-loader!../assets/code/raw-helper.example'),
  gulpReplace: require('raw-loader!../assets/code/gulp-replace.example'),
  mustacheHack: require('raw-loader!../assets/code/mustache-hack.example'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#2b2b2b',
    tertiary: '#2199e8',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          bgImage={images.hero.replace('/', '')}
          bgDarken={0.5}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
             Creating Responsive Emails
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={6} caps textColor="primary">
              Using the ZURB Stack
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary" textColor="secondary" align="center center">
          <Image src={images.mjh} width={300} />
          <List className="list--center">
            <ListItem><strong>Marvin Hübner</strong></ListItem>
            <ListItem>Frontend Developer</ListItem>
            <ListItem>Working at <Link href="https://www.bergwerk.ag/">BERGWERK</Link></ListItem>
            <ListItem>Member of the <Link href="https://www.t3ughofl.de/">T3UGHOF</Link></ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem><Link href="https://twitter.com/Marvin_Huebner" target="_blank">https://twitter.com/Marvin_Huebner</Link></ListItem>
            <ListItem><Link href="https://github.com/marvinhuebner" target="_blank">https://github.com/marvinhuebner</Link></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Table of Content
          </Heading>
          <List>
            <ListItem>Statistics</ListItem>
            <ListItem>Responsive Email Basics</ListItem>
            <ListItem>Foundation for Emails</ListItem>
            <ListItem>Panini (Handlebars)</ListItem>
            <ListItem>Inky</ListItem>
            <ListItem>Gulp</ListItem>
            <ListItem>Real-life examples</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Statistics
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.statisticsMobileDesktop} width={800} />
          <Link href="https://litmus.com/blog/email-client-market-share-trends-first-half-of-2018" target="_blank" textSize="12px">
            © Litmus - Email Client Market Share Trends for the First Half of 2018
          </Link>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.statisticsMobileDesktopReal} width={800} />
          <Link href="https://litmus.com/blog/email-client-market-share-trends-first-half-of-2018" target="_blank" textSize="12px">
            © Litmus - Email Client Market Share Trends for the First Half of 2018
          </Link>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.statisticsMarketShare} width={800} />
          <Link href="https://litmus.com/blog/email-client-market-share-trends-first-half-of-2018" target="_blank" textSize="12px">
            © Litmus - Email Client Market Share Trends for the First Half of 2018
          </Link>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.statisticsOutlook} width={800} />
          <Link href="https://litmus.com/blog/the-2017-email-client-market-share-infographic" target="_blank" textSize="12px">
            © Litmus - The 2017 Email Client Market Share [Infographic]
          </Link>
        </Slide>
        <Slide  bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Learnings!?
          </Heading>
          <List>
            <ListItem>Mobile usage outweighs desktop usage</ListItem>
            <ListItem>Old Email clients like Outlook (2000 - 2013) or Yahoo Mail are still in use</ListItem>
            <ListItem>Variety of clients requiring support is greater than different browser versions</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Technical Requirements
          </Heading>
          <List>
            <ListItem>Simple HTML "Websites"</ListItem>
            <ListItem>HTML Markup using deep nested tables</ListItem>
            <ListItem>CSS Inline Styles</ListItem>
          </List>
        </Slide>
        <Slide>
          <video src={require('file-loader!../assets/intro-example.mp4')} style={{height: '70vh'}} controls autoplay></video>
        </Slide>
        <Slide>
          <Image src={images.introExampleLitmus} />
          <Link href="https://litmus.com/pub/0e0c7a6" target="_blank" textSize="12px">
            Litmus Email Client Previews
          </Link>
          <Notes>
            https://litmus.com/previews/tests/64898
          </Notes>
        </Slide>
        <Slide>
          <CodePane
            lang="html"
            source={codeExamples.intro}
            className="prism-code--overflow"
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1rem"
          />
        </Slide>
        <Slide>
          <Image src={images.howsWritingHtmlEmails} width={500} />
        </Slide>
        <Slide>
          <CodePane
            lang="html"
            source={codeExamples.introSource}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1rem"
          />
        </Slide>
        <Slide>
          <Image src={images.easyWork} width={500} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Foundation for Emails
          </Heading>
          <Notes>
            Foundation for Emails (previously known as Ink) is a framework for creating responsive HTML emails that work in any email client — even Outlook. Our HTML/CSS components have been tested across every major email client to ensure consistency. And with the Inky templating language, writing HTML emails is now even easier.
          </Notes>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Foundation for Emails
          </Heading>
          <List>
            <ListItem>Framework for creating responsive HTML Emails</ListItem>
            <ListItem>Based on SCSS</ListItem>
            <ListItem>Provides base html styles</ListItem>
            <ListItem>Provides styles for Inky components like `Container`, `Rows`, `Columns`, `Buttons` etc.</ListItem>
          </List>
        </Slide>
        <Slide>
          <CodePane
            lang="scss"
            source={codeExamples.foundationForEmails}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Panini
          </Heading>
          <Notes>
            A flat file compiler that powers our prototyping template. Create pages with consistent layouts and reusable partials with ease.
          </Notes>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Panini
          </Heading>
          <List>
            <ListItem>A super simple flat file generator</ListItem>
            <ListItem>It follows the concepts of templates (layouts), pages, and partials</ListItem>
            <ListItem>It's powered by Handlebars</ListItem>
            <ListItem>Use custom Handlebars helpers</ListItem>
            <ListItem>Use external data like JSON or YAML</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Handlebars
          </Heading>
          <CodePane
            lang="js"
            source={codeExamples.handlebars}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
          <Link href="https://github.com/wycats/handlebars.js/#usage" target="_blank" textSize="12px">
            Example from the Handlebars Docs
          </Link>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Layouts & Pages
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.paniniLayoutsPages}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
          <CodePane
            lang="html"
            source={codeExamples.paniniPage}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Partials
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.paniniPartials}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Built-In Helpers
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.paniniBuildInHelpers}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Custom Helpers
          </Heading>
          <CodePane
            lang="js"
            source={codeExamples.paniniHelper}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
          <CodePane
            lang="html"
            source={codeExamples.paniniHelperUsage}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Rendering Data
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.paniniHandlebars}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Folder Structure
          </Heading>
          <Image src={images.paniniFolderStructure} width={400} margin="20px auto" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Inky
          </Heading>
          <Notes>
            Inky is an HTML-based templating language that converts simple HTML into complex, responsive email-ready HTML.
          </Notes>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Inky
          </Heading>
          <List>
            <ListItem>HTML-based templating language</ListItem>
            <ListItem>Converts simple into complex HTML</ListItem>
            <ListItem>Designed for "Foundation for Emails"</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Inky Template
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.inky}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Compiled Output
          </Heading>
          <Layout>
            <Fill padding="20px">
              <CodePane
                lang="html"
                source={codeExamples.inky}
                className="prism-code--overflow"
                margin="20px auto"
                padding="0 10px"
                overflow="overflow"
                theme="external"
              />
            </Fill>
            <Fill>
              <CodePane
                lang="html"
                source={codeExamples.inkyCompiled}
                className="prism-code--overflow"
                padding="0 10px"
                margin="20px auto"
                overflow="overflow"
                theme="external"
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Gulp
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Build system based on Gulp
          </Heading>
          <List>
            <ListItem>Compiles Panini Templates with Inky</ListItem>
            <ListItem>SCSS compilation</ListItem>
            <ListItem>Full inlining process</ListItem>
            <ListItem>Image compression</ListItem>
            <ListItem>Built-in BrowserSync server</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Gulp Pages & Inliner Tasks
          </Heading>
          <CodePane
            lang="scss"
            source={codeExamples.gulp}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} caps fit textColor="primary">
            Demo
          </Heading>
        </Slide>
        <Slide>
          <video src={require('file-loader!../assets/fluid-example.mp4')} style={{height: '70vh'}} controls autoplay></video>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Fluid & TYPO3 Form Extension
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.fluid}
            className="prism-code--overflow"
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Mustache
          </Heading>
          <CodePane
            lang="html"
            source={codeExamples.mustache}
            className="prism-code--overflow"
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Mustache Hacks
          </Heading>
          <CodePane
            lang="js"
            source={codeExamples.rawHelper}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
          <CodePane
            lang="js"
            source={codeExamples.gulpReplace}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
          <CodePane
            lang="html"
            source={codeExamples.mustacheHack}
            margin="20px auto"
            overflow="overflow"
            theme="external"
            textSize="1.25rem"
          />
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Similar Approches
          </Heading>
          <List>
            <ListItem><Link href="https://github.com/mjmlio/mjml" target="_blank">MJML</Link></ListItem>
            <ListItem><Link href="https://www.mailjet.de/transaktions-e-mails/" target="_blank">Mailjet API</Link></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Resources
          </Heading>
          <List>
            <ListItem><Link href="https://github.com/marvinhuebner" target="_blank">My Github</Link> (Slides and Sample Project)</ListItem>
            <ListItem><Link href="https://foundation.zurb.com/emails/docs/" target="_blank">Foundation for Emails Docs</Link></ListItem>
            <ListItem><Link href="https://github.com/zurb/foundation-emails-template" target="_blank">Official starter project for Foundation for Emails</Link></ListItem>
            <ListItem><Link href="https://github.com/ueno-llc/newsletter" target="_blank">Ueno Newsletter</Link> (from the Panini and Inky main contributor)</ListItem>
            <ListItem>WIP: <Link href="https://github.com/SnowdogApps/magento2-frontools/pull/338" target="_blank">Integration with Magento 2 Frontools</Link></ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
