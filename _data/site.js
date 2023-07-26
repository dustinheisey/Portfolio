const config = {
  title: "Portfolio of Dustin Heisey",
  url: "https://dustinheisey.com",
  description:
    "The portfolio of Dustin Heisey. I provide comprehensive, customized web design services that prioritize accessibility, sustainability, and social impact. Partner with me to create a website that showcases your social impact and aligns with your values.",
  navigation: {
    logo: {
      src: "/public/svg/logo",
      alt: "Dustin Heisey",
    },
    header: {
      variant: "spaced",
      links: [
        { label: "About", url: "/about" },
        {
          label: "Services",
          url: "/services",
          subLinks: [
            { label: "Branding", url: "/services/branding" },
            {
              label: "Web Design",
              url: "/services/web-design",
            },
            { label: "Optimization", url: "/services/optimization" },
          ],
        },
        { label: "Portfolio", url: "/portfolio" },
        { label: "Blog", url: "/blog" },
      ],
      action: { label: "Start a Project", url: "/contact" },
    },
    bottombar: {
      links: [
        { label: "Home", url: "/", icon: "home" },
        { label: "About", url: "/about", icon: "about" },
        { label: "Services", url: "/services", icon: "web-design" },
        { label: "Portfolio", url: "/portfolio", icon: "portfolio" },
        { label: "Blog", url: "/blog", icon: "blog" },
      ],
      fab: { label: "Contact", url: "/contact", icon: "contact" },
    },
    footer: {
      variant: "newsletter",
      carbon: true,
      newsletter: {
        headline: "Subscribe to My Newsletter",
        body: "Get weekly updates on web accessibility and sustainability trends, case studies, and tutorials in my newsletter. Stay informed on best practices and resources to build an inclusive, eco-friendly digital presence.",
      },
      groups: [
        {
          title: "Services",
          links: [
            { label: "Branding", url: "/services/branding" },
            {
              label: "Web Design",
              url: "/services/web-design",
            },
            { label: "Optimization", url: "/services/optimization" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "Home", url: "/" },
            { label: "About", url: "/about" },
            { label: "Portfolio", url: "/portfolio" },
            { label: "Blog", url: "/blog" },
            { label: "Start a Project", url: "/contact" },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              label: "Privacy Policy",
              url: "https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b",
            },
            {
              label: "Terms of Service",
              url: "https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5",
            },
            {
              label: "Cookies",
              url: "https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df",
            },
            { label: "Sitemap", url: "/sitemap.xml" },
          ],
        },
      ],
      social: [
        {
          label: "Medium",
          icon: "logo-medium",
          url: "https://medium.com/@dustin_heisey",
        },
        {
          label: "Dribbble",
          icon: "logo-dribbble",
          url: "https://dribbble.com/dustin_heisey",
        },
        {
          label: "Behance",
          icon: "logo-behance",
          url: "https://www.behance.net/dustin_heisey",
        },
        {
          label: "LinkedIn",
          icon: "logo-linkedin",
          url: "https://www.linkedin.com/in/heiseydustin/",
        },
      ],
      copywrite: "© 2023 Dustin Heisey, All rights reserved.",
    },
  },
  pages: [
    {
      url: "index",
      title: "Accessible and Sustainable Web Design Services",
      description:
        "The portfolio of Dustin Heisey. I provide comprehensive, customized web design services that prioritize accessibility, sustainability, and social impact. Partner with me to create a website that showcases your social impact and aligns with your values.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "hero",
            accent: "Sustainable",
            headline: " Web Design for Purpose-Driven Orgs",
            body: "You do important work for people and the planet. Elevate your online presence with a visually appealing, accessible, and eco-friendly web design that reflects your values and increases your impact.",
            btn: {
              label: "Start a Project",
              url: "/contact",
            },
          },
          end: {
            component: "img",
            src: "hero.png",
            alt: "Sustainable World",
          },
        },
        problem: {
          layout: "center",
          text: "start",
          content: {
            component: "list",
            variant: "grid",
            headline:
              "Managing your organization takes a lot of work. Managing its' web presence shouldn't have to.",
            items: [
              {
                icon: "remove",
                text: "There's too many moving parts to manage",
              },
              {
                icon: "remove",
                text: "The costs are too high for your budget",
              },
              {
                icon: "remove",
                text: "Unsatisfying results without proper expertise",
              },
              {
                icon: "remove",
                text: "You need to support a diverse population",
              },
              {
                icon: "remove",
                text: "Your users may not have reliable internet access",
              },
              {
                icon: "remove",
                text: "Finding eco-conscious designers is challenging",
              },
            ],
          },
        },
        guide: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "profile.png",
            alt: "Dustin Heisey",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Your eco-conscious web designer",
            headline: "I'm Dustin Heisey",
            body: "As a passionate advocate for environmental sustainability and social welfare, as well as an expert in accessible, responsive and low carbon web design, I can help you navigate this difficult terrain.",
          },
        },
        plan: {
          layout: "switcher",
          headline: "Tailored Plans for Every Client",
          items: [
            {
              component: "card",
              theme: "secondary-container",
              icon: "branding",
              url: "/services/branding",
              headline: "Complete Branding",
              body: "I'll develop a captivating marketing story and brand guidelines, as well as a visual language that evokes powerful emotions, ensuring a memorable brand identity thats drives conversions.",
            },
            {
              component: "card",
              theme: "primary-container",
              icon: "web-design",
              url: "/services/web-design",
              headline: "Custom Web Design",
              body: "I'll create a custom website that prioritizes accessibility, speed, mobile responsiveness, and sustainability. I'll craft a design system for easy scalability and lasting impact.",
            },
            {
              component: "card",
              theme: "tertiary-container",
              icon: "performance",
              url: "/services/optimization",
              headline: "Website Optimization",
              body: "I'll Maximize website performance, accessibility, and sustainability. I'll Enhance load times, user experience, and search visibility. I'll give your website offline support.",
            },
          ],
        },
        action: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            size: "region",
            headline: "Transform Your Online Presence",
            body: "Together we'll craft a compelling, sustainable website that resonates with your audience and amplifies the impact that only you can have.",
            btn: {
              label: "Start a Project",
              url: "/contact",
            },
          },
          end: {
            component: "img",
            src: "transformation.png",
            alt: "Transformation",
          },
        },
        testimonials: {
          layout: "center",
          text: "start",
          content: {
            component: "blockquote",
            variant: "accent",
            quote:
              "I am beyond pleased with Dustin’s impeccable service. He was extremely attentive in understanding my business and provided very personalized help. Great designer. I 100% recommend working with him.",
            author: "Jarod Hoover | CEO of Hoover Honey",
          },
        },
      },
    },
    {
      url: "about",
      title: "Web Designer for Accessible, Sustainable, Impactful Sites",
      description:
        "I'm Dustin Heisey and I'm committed to creating accessible, sustainable, and socially impactful websites. Get to know me and see how I can transform your online presence.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Sustainable Web Solutions",
            headline:
              "Partnering with Eco-Conscious Businesses and Nonprofits for a Greener Digital Future",
            body: "As a web designer specializing in accessibility and sustainability, I'm dedicated to helping your business or nonprofit reach as many people as possible and make as much of an impact as possible.",
          },
          end: {
            component: "img",
            src: "about-intro.png",
            alt: "Intro",
          },
        },
        introduction: {
          layout: "start-heavy",
          align: "stretch",
          start: {
            component: "img",
            src: "about-bio.png",
            alt: "Bio",
          },
          end: {
            component: "text",
            lead: "Growing up, I always felt a deep connection to nature. As I witnessed the escalating dangers of climate change, I realized that businesses and nonprofits play a crucial role in addressing this global crisis. My passion for the environment and my expertise in web design led me to create accessible and sustainable digital solutions for purpose-driven organizations.",
            body: "By choosing to work with me, you're not only investing in a visually stunning and user-friendly website but also supporting a diverse population of users and helping to create a greener digital future. I am committed to helping your organization maximize its impact on people and the planet, showcasing your dedication to social and environmental responsibility. Together, we can create a digital presence that resonates with your target audience and sets you apart from the competition.",
          },
        },
        skills: {
          layout: "gallery",
          col: 3,
          headline: "Skills & Expertise",
          items: [
            {
              component: "blurb",
              variant: "stack",
              headline: "User Experience Design",
              icon: "ux-design-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "User Interface Design",
              icon: "ui-design-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Semantic HTML",
              icon: "html-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Responsive CSS",
              icon: "css-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Accessibility",
              icon: "accessibility-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Design Systems",
              icon: "design-system-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Javascript",
              icon: "javascript-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Progressive Web Apps",
              icon: "pwa-l",
            },
            {
              component: "blurb",
              variant: "stack",
              headline: "Performance Optimization",
              icon: "performance-l",
            },
          ],
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          size: "region",
          headline: "Ready to Make a Difference? Let's Collaborate!",
          body: "I'm dedicated to helping businesses and nonprofits like yours thrive while protecting our planet. Get in touch and let's embark on a journey towards a more sustainable future for your organization.",
          btn: {
            label: "Start a Project",
            url: "/contact",
          },
        },
      },
    },
    {
      url: "services",
      title: "Web Solutions - Accessible, Sustainable, Impactful",
      description:
        "Discover comprehensive web design services that prioritize accessibility, sustainability, and social impact. Our customized solutions cater to your unique needs, ensuring your website communicates your mission effectively. Leverage our expertise for meticulous attention to detail, audience engagement, and a website that truly embodies your vision",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "A Sustainable Future for Your Online Presence",
            headline:
              "Empowering Eco-Conscious Businesses and Nonprofits with Accessible, Sustainable Web Solutions",
          },
          end: {
            component: "img",
            src: "services.png",
            alt: "Services",
          },
        },
        introduction: {
          layout: "bg-pattern",
          theme: "secondary",
          pattern: "topography",
          overline: "Bridging the Gap",
          headline:
            "Balancing Marketing Goals, Accessibility, and Sustainability",
          body: "It's not just about creating a visually appealing website; With growing concerns about environmental sustainability and the need for accessibility, Organizations like yours face multiple challenges in creating an online presence that aligns with their values. I specialize in helping eco-conscious businesses and nonprofits achieve their marketing goals while prioritizing accessibility and sustainability.",
        },
        branding: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "branding-service.png",
            alt: "Branding Service",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Crafting Your Unique Identity",
            headline:
              "Comprehensive Branding Solutions Tailored to Your Organization",
            body: "For organizations seeking a strong, cohesive brand identity: I work closely with your team to understand your organization's vision and values. Together, we'll develop a marketing message fit for your organization's mission & values, a comprehensive brand strategy guide, and a visual style guide for consistent branding across all platforms.",
            btn: {
              variant: "secondary",
              label: "Learn More About Branding",
              url: "/services/branding",
            },
          },
        },
        design: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "Building Accessible Experiences",
            headline:
              "Responsive, Sustainable Websites for a Conscious Audience",
            body: "For organizations looking to build a visually stunning and accessible online presence: I create responsive, aesthetically pleasing, and user-friendly websites that adhere to WCAG 2.1 accessibility standards. By prioritizing sustainability, I ensure that your website not only looks great but also supports your organization's commitment to the environment.",
            btn: {
              variant: "secondary",
              label: "Learn More About Web Design",
              url: "/services/web-design",
            },
          },
          end: {
            component: "img",
            src: "web-design-service.png",
            alt: "Web Design Service",
          },
        },
        optimization: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "optimization-service.png",
            alt: "Optimization Service",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Enhancing Your Online Presence",
            headline: "Streamlined Performance, Accessibility, and Consistency",
            body: "For organizations aiming to optimize their website and maintain its quality over time: I enhance your website's accessibility and performance, converting it into a progressive web app and implementing a design system for consistency and scalability. With ongoing maintenance, I keep your web app up to date and error-free, ensuring a seamless user experience.",
            btn: {
              variant: "secondary",
              label: "Learn More About Optimization",
              url: "/services/optimization",
            },
          },
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          size: "region",
          headline: "Ready to Make a Difference? Let's Collaborate!",
          body: "I'm dedicated to helping businesses and nonprofits like yours thrive while protecting our planet. Get in touch and let's embark on a journey towards a more sustainable future for your organization.",
          btn: {
            label: "Start a Project",
            url: "/contact",
          },
        },
      },
    },
    {
      url: "services/branding",
      title: "Comprehensive Brand Guide & Marketing Solutions",
      description:
        "Establish an effective brand identity with my branding service. I dive deep into your organization's ethos to create a unique brand guide, compelling marketing story, and style guide that resonates with your target audience and enhances your brand's impact.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Shape Your Brand Identity",
            headline:
              "Effective Storytelling and Cohesive Visuals for Purpose-Driven Organizations",
            body: "Build a strong, resonant brand that connects with your target audience and reflects your organization's values.",
          },
          end: {
            component: "img",
            src: "branding-intro.png",
            alt: "Branding Intro",
          },
        },
        problem: {
          layout: "bg-pattern",
          align: "center",
          theme: "secondary",
          pattern: "topography",
          lead: "Purpose driven businesses or nonprofits like yours faces tough challenges. From skeptical markets and the struggle of balancing purpose with profit, to managing limited resources and tricky regulations, it's a tough path. Marketing your purpose without over-promising is hard, and creating a brand that's eco-conscious and widely appealing isn't easy. These hurdles can limit the impact of even the most passionate organizations.",
        },
        description: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "branding-description.png",
            alt: "Branding Description",
          },
          end: {
            component: "text",
            size: "region",
            overline: "A Holistic Approach to Branding",
            headline: "Authentic Branding Solutions for Your Organization",
            body: "I get it, and I'm here to help. My branding service is designed to ease your journey by authentically communicating your purpose, balancing it with the realities of running your organization, and managing your limited resources efficiently. I can help you create a compelling, eco-conscious brand that resonates with a wide audience.",
          },
        },
        plan: {
          layout: "sparkline",
          variant: "inline",
          overline: "Your Branding Journey",
          headline:
            "A Step-by-Step Process, from Initial Inquiry to Final Result",
          items: [
            {
              component: "blurb",
              headline: "Understanding Your Purpose",
              body: "We'll dive deep into the core of your organization to truly understand your mission, vision, and values. This step is crucial to ensure the authenticity of your brand and align it with your purpose.",
            },
            {
              component: "blurb",
              headline: "Research and Messaging",
              body: "We'll work together to balance it with the realities of running your organization. This involves looking at resources, budget, and other operational considerations to craft a messaging framework that resonates with your audience.",
            },
            {
              component: "blurb",
              headline: "Brand Identity Development",
              body: "We'll transform everything we've learned into a compelling, eco-conscious brand that resonates with a wide audience. This brand will not only represent your organization's purpose and values but also engage your target audience meaningfully.",
            },
            {
              component: "blurb",
              headline: "Implementation",
              body: "We'll then solidify your brand identity. We will create a comprehensive brand strategy guide, outlining how your brand should be presented across different platforms. Additionally, we will develop brand guidelines, ensuring consistency in your brand's appearance and voice.",
            },
          ],
        },
        transformation: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "The Power of Branding",
            headline: "Elevate Your Organization's Impact",
            body: "By investing in this branding service, you'll witness a remarkable transformation in your organization. It will emerge with a solid brand strategy and clear guidelines that ensure consistency across all platforms. Expect to see heightened audience engagement, improved brand recognition, and a strengthened commitment to your mission, amplifying the impact and reach of your purpose-driven organization.",
          },
          end: {
            component: "img",
            src: "branding-transformation.png",
            alt: "Transformation",
          },
        },
        faqs: {
          layout: "accordion",
          overline: "Branding Service faqs",
          headline: "Answers to Your Most Common Questions",
          items: [
            {
              component: "details",
              headline:
                "What deliverables can I expect from your branding service?",
              body: "The final deliverable includes a comprehensive brand strategy guide, a style guide that outlines your brand's visual elements (colors, typography, etc.) and guidelines for how to use them to ensure consistent and effective communication across all platforms.",
            },
            {
              component: "details",
              headline: "How long does the branding process take?",
              body: "The timeline can vary depending on the scope of the project and your specific needs. Generally, this process spans several weeks, allowing time to understand your organization, develop a brand strategy, and create the necessary brand guidelines. I'll provide a more specific timeline once I've had a chance to assess your needs.",
            },
            {
              component: "details",
              headline: "Will I have input in the branding process?",
              body: "Absolutely! I value your input and believe that collaboration is essential for creating a successful brand strategy. Throughout the process, I will communicate with you regularly, gather your feedback, and incorporate your ideas to ensure the final outcome aligns with your vision.",
            },
            {
              component: "details",
              headline: "What if we have limited resources?",
              body: "I understand that many organizations operate with limited resources. That's why my process includes a focus on efficient resource management. I strive to create budget-friendly strategies and leverage digital tools for effective brand communication, making the most of what you have.",
            },
            {
              component: "details",
              headline:
                "How can we maintain brand consistency after your service?",
              body: "After this service, you will have a solid brand strategy and clear brand guidelines. These tools will guide your organization's future communications, ensuring brand consistency across all platforms. I can also offer ongoing support and consultations to help you maintain brand consistency as your organization evolves.",
            },
            {
              component: "details",
              headline: "How do you ensure our brand will be eco-conscious?",
              body: "I place a great emphasis on creating brands that not only resonate with a wide audience but are also eco-conscious. I do this by deeply understanding your organization's purpose and values, particularly in relation to sustainability. I incorporate these principles into your brand identity, ensuring it authentically represents your commitment to the environment.",
            },
          ],
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          headline: "Unlock Your Brand's Potential",
          body: "Ready to elevate your purpose-led organization with an authentic, eco-conscious brand that truly resonates? Take the first step towards transforming your branding journey today. Don't wait - your remarkable brand transformation is just a conversation away!",
          btn: {
            url: "/contact",
            label: "Start a Project",
          },
        },
      },
    },
    {
      url: "services/web-design",
      title: "Responsive, Accessible & Sustainable Web Design",
      description:
        "Elevate your online presence with my eco-friendly web design service, providing responsive, accessibility standards compliant, and low carbon progressive web apps for your organization. Enhance your brand while making a positive impact on the environment.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Customized Web Design Solutions",
            headline:
              "Accessible, Sustainable, and Responsive Websites for Eco-Conscious Organizations",
            body: "Craft a unique online presence that reflects your brand, supports your goals, and sets you apart from competitors.",
          },
          end: {
            component: "img",
            src: "web-design-intro.png",
            alt: "Web Design Intro",
          },
        },
        problem: {
          layout: "bg-pattern",
          theme: "primary",
          align: "center",
          pattern: "topography",
          lead: "Crafting a sustainable, accessible, and engaging website can be a daunting task. It means juggling WCAG guidelines, tech trends, and user expectations with budget limitations. However, building a website that reflects your mission, promotes inclusivity, and minimizes digital footprint is a crucial commitment for your organization.",
        },
        description: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "web-design-description.png",
            alt: "Web Design Description",
          },
          end: {
            component: "text",
            size: "region",
            overline: "A Collaborative Design Process",
            headline: "Tailored Web Solutions that Reflect Your Vision",
            body: "Overwhelmed by all of these moving parts? I can help. My web design service simplifies this complex process, balancing WCAG guidelines, emerging tech trends, and user demands within your budget. More than just a service, I can be your partner in bringing your mission to life online, promoting inclusivity and demonstrating to users your commitment to environmental sustainability.",
          },
        },
        plan: {
          layout: "sparkline",
          variant: "inline",
          overline: "Your Web Design Journey",
          headline:
            "A Step-by-Step Process, from Initial Inquiry to Finished Website",
          items: [
            {
              component: "blurb",
              headline: "Consultation and Research",
              body: "We'll explore your mission, your vision, and your specific needs. This step is about understanding your organization's goals, identifying your target audience, and outlining your budgetary boundaries.",
            },
            {
              component: "blurb",
              headline: "Design and Development",
              body: "I'll start designing and developing your site. I'll balance aesthetics with accessibility, staying current with tech trends, and ensure a user-friendly experience, all while keeping an eye on sustainability.",
            },
            {
              component: "blurb",
              headline: "Rigorous Testing and Refinement",
              body: "The site will then be rigorously tested for user experience, accessibility, and sustainability. I'll refine and tweak the website based on feedback and test results to ensure optimal performance and compliance with all necessary standards.",
            },
            {
              component: "blurb",
              headline: "Launch and Ongoing Support",
              body: "After final adjustments, your website will be ready for launch. But my support doesn't end there. I'll provide ongoing assistance to keep your site updated, ensuring it remains accessible, sustainable, and engaging for all users.",
            },
          ],
        },
        transformation: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "The Power of Web Design",
            headline: "Elevate Your Organization's Online Presence",
            body: "Imagine creating a digital space that effectively communicates your mission, attracts your target audience, and promotes inclusivity, all while demonstrating your commitment to environmental sustainability. More than just a website, it's a beacon of your values, a powerful tool that engages, inspires, and fosters a deeper connection with your audience, fueling growth and amplifying your impact.",
          },
          end: {
            component: "img",
            src: "web-design-transformation.png",
            alt: "Transformation",
          },
        },
        faqs: {
          layout: "accordion",
          overline: "Web Design Service faqs",
          headline: "Answers to Your Most Common Questions",
          items: [
            {
              component: "details",
              headline: "What kind of websites do you design?",
              body: "I design custom, responsive, accessible, and sustainable websites for eco-conscious businesses and nonprofits. My focus is on creating user-friendly sites that adhere to WCAG 2.2 accessibility standards and generate a low carbon footprint, making them ideal for organizations with a strong focus on sustainability and inclusivity.",
            },
            {
              component: "details",
              headline: "How long will the web design process take?",
              body: "The timeline for the web design process can vary greatly depending on the complexity of the project and your specific requirements. I understand the time constraints you are under, and I'm committed to delivering a high-quality, sustainable, and accessible website in a timely manner, while ensuring you're involved at every step.",
            },
            {
              component: "details",
              headline: "Will my website be mobile-friendly and responsive?",
              body: "Yes, I prioritize designing websites that are responsive and mobile-friendly, ensuring a seamless browsing experience for your users across all devices, including desktops, tablets, and smartphones.",
            },
            {
              component: "details",
              headline:
                "What kind of support do you provide after the website launch?",
              body: "My support extends beyond the website launch. I provide ongoing assistance to keep your site updated and to ensure it remains accessible, sustainable, and engaging for all users. This includes regular check-ins, updates to comply with new guidelines or content updates, and prompt responses to any issues or concerns you may have.",
            },
            {
              component: "details",
              headline:
                "Do you provide website hosting and domain registration services?",
              body: "Yes, in addition to offering sustainable and accessible web design, I also provide website hosting and domain registration services. If you need assistance with either of these areas, I can take care of it for you. My goal is to simplify these processes and provide a comprehensive solution to your online presence needs.",
            },
            {
              component: "details",
              headline: "What is WCAG and why is it important?",
              body: "WCAG stands for Web Content Accessibility Guidelines, a set of recommendations for making web content more accessible to people with disabilities. It's important because an accessible website ensures that all users, regardless of their abilities, can engage with your content. It's not just about compliance, it's about inclusivity and reaching a wider audience.",
            },
            {
              component: "details",
              headline:
                "How do you incorporate sustainability into web design?",
              body: "Sustainability in web design is about minimizing the environmental impact of a website. This could include optimizing server efficiency, reducing data transfer, and using energy-efficient coding practices. It aligns your digital presence with your eco-conscious values and helps to reduce the carbon footprint of your website.",
            },
            {
              component: "details",
              headline:
                "How do you balance aesthetics with accessibility and sustainability?",
              body: "Balancing aesthetics with accessibility and sustainability is a careful process. I focus on clean, efficient design that reduces data load and energy use. Accessibility features are integrated in a way that complements the overall design.",
            },
          ],
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          headline: "Ready to Transform Your Online Presence?",
          body: "Ready to revolutionize your online presence with a website that truly reflects your mission and values? Whether you're starting from scratch or looking to redesign, I'm here to help you navigate the complexities and create a digital platform that is accessible, sustainable, and engaging. Don't wait to make a powerful statement about your commitment to inclusivity and environmental sustainability. Reach out today and let's embark on this transformative journey together.",
          btn: {
            url: "/contact",
            label: "Start a Project",
          },
        },
      },
    },
    {
      url: "services/optimization",
      title: "Low-Carbon Web Optimization & WCAG 2.2 Compliance",
      description:
        "Boost your website's performance with my eco-friendly optimization services, ensuring minimal carbon emissions, full WCAG 2.2 compliance, and a seamless design system for unparalleled user experience and accessibility.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Website Optimization Service",
            headline: "Maximize Accessibility, Sustainability, and Performance",
            body: "Transform your existing website into a consistent, scalable, and responsive progressive web app that meets accessibility standards and generates less carbon per page view than at least 70% of websites.",
          },
          end: {
            component: "img",
            src: "optimization-intro.png",
            alt: "Optimization Intro",
          },
        },
        problem: {
          layout: "bg-pattern",
          theme: "tertiary",
          align: "center",
          pattern: "topography",
          lead: "Optimizing your website to be sustainable, accessible, and visually appealing can feel like navigating a labyrinth. Legal requirements and the fast-paced digital landscape demand constant vigilance, while scarce resources and limited expertise can stall progress. As your website expands, the surge in content, features, and user interactions can lead to a jumbled visual and navigational experience, reducing consistency and straining your brand's identity and user engagement.",
        },
        description: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "optimization-description.png",
            alt: "Optimization Description",
          },
          end: {
            component: "text",
            size: "region",
            overline: "Comprehensive Optimization",
            headline:
              "Master the Labyrinth of Web Design with Comprehensive, Sustainable Solutions",
            body: "Navigate this maze with confidence by entrusting me with your website optimization. I'll transform your digital presence, making it sustainable, accessible, and visually compelling, while ensuring compliance with evolving legal requirements. I can mitigate the stress of limited time and resources, adeptly managing the growth of your site to maintain visual and navigational consistency. I'll also convert your site to a responsive Progressive Web App for a seamless user experience across all devices. You can focus on your mission and leave the rest to me.",
          },
        },
        plan: {
          layout: "sparkline",
          variant: "inline",
          overline: "Your Optimization Journey",
          headline:
            "A Step-by-Step Process, from Initial Inquiry to Ongoing Maintenance",
          items: [
            {
              component: "blurb",
              headline: "Strategy Formation",
              body: "We'll have a discussion about your website needs. I'll formulate a strategy for website optimization, focusing on sustainability, accessibility, and visual appeal, all in alignment with the most recent legal requirements.",
            },
            {
              component: "blurb",
              headline: "Website Optimization",
              body: "I'll make your website not only visually compelling but also compliant with all necessary accessibility standards. This step ensures your website is welcoming and accessible to all, enhancing user experience and engagement.",
            },
            {
              component: "blurb",
              headline: "Enhancements",
              body: "I'll create a design system that reflects your brand identity and use it to apply a consistent visual style throughout your website. I'll also convert your website into a responsive Progressive Web App, offering a seamless user experience across all devices.",
            },
            {
              component: "blurb",
              headline: "Ongoing Maintenance",
              body: "To keep your site relevant and adaptable to the evolving digital landscape, I also offer ongoing maintenance services. This way, you can focus on your mission while I ensure that your web presence remains strong and consistent.",
            },
          ],
        },
        transformation: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "region",
            overline: "The Power of Optimization",
            headline: "Experience the Benefits of an Optimized Website",
            body: "With my optimization services, you can expect an optimized website that is sustainable, accessible, and visually compelling, making your brand more recognizable and attractive to all users. And with continuous maintenance, your digital presence will remain resilient and current, adapting to ever-changing trends and standards. Anticipate an uplift in user engagement, a surge in website traffic, and a renewed commitment to your mission as your online reach expands.",
          },
          end: {
            component: "img",
            src: "optimization-transformation.png",
            alt: "Transformation",
          },
        },
        faqs: {
          layout: "accordion",
          overline: "Optimization Service FAQs",
          headline: "Answers to Your Most Common Questions",
          items: [
            {
              component: "details",
              component: "details",
              headline: "How will website optimization help my organization?",
              body: "Website optimization can drastically enhance your organization's digital presence. It makes your site more accessible, visually appealing, and sustainable, leading to an improved user experience. This can boost user engagement, increase traffic, and ultimately help further your mission. Additionally, an optimized site is more likely to rank higher in search engine results, increasing your organization's visibility and reach.",
            },
            {
              component: "details",
              headline:
                "What does it mean to convert my site to a Progressive Web App?",
              body: "Converting your site to a Progressive Web App (PWA) means that it will function more like a native app on a user's device. It will be responsive, meaning it adapts to fit any screen size, ensuring a seamless user experience across all devices. PWAs also work offline and can be added to a user's home screen, making your website accessible even without an internet connection.",
            },
            {
              component: "details",
              headline:
                "How will you ensure that my website stays relevant and up-to-date?",
              body: "I offer ongoing maintenance services to ensure your website stays current and adaptable to the evolving digital landscape. This includes regular updates to content, design, and functionality, as well as monitoring and addressing any issues that arise. I keep an eye on the latest trends and legal requirements to ensure your website remains compliant and relevant.",
            },
            {
              component: "details",
              headline:
                "Will optimizing my website disrupt my current operations?",
              body: "Not at all. I understand the importance of maintaining your operations during the optimization process. My approach is designed to minimize disruption, and I'll work with you to schedule updates and maintenance during off-peak hours whenever possible. Furthermore, my ongoing maintenance ensures that your website stays in optimal condition without any need for you to divert resources away from your core mission.",
            },
            {
              component: "details",
              headline: "How long does the optimization process usually take?",
              body: "The duration of the optimization process can vary depending on the size and complexity of your website, as well as your specific needs and goals. However, I strive to complete the optimization process as efficiently as possible, without compromising the quality of the work. I will provide you with a detailed timeline at the outset, so you can know what to expect.",
            },
            {
              component: "details",
              headline:
                "Will my website still be easy for my team to update and manage after the optimization?",
              body: "Definitely. Part of my optimization process involves making sure your team can easily update and manage the site. Furthermore, my ongoing maintenance services mean I'm always here to support you with any technical issues or updates that might arise.",
            },
          ],
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          headline: "Ready to Optimize Your Website?",
          body: "Don't let the intricacies of website optimization and maintenance hold you back. Empower your mission-driven organization with a robust, accessible, and visually compelling online presence. Reach out today, and together we'll build a digital platform that resonates with your audience and amplifies your impact. Contact me now to get started!",
          btn: {
            url: "/contact",
            label: "Start a Project",
          },
        },
      },
    },
    {
      url: "portfolio",
      title: "See Some Past Projects",
      description:
        "Check out some of my previous web design projects that prioritize accessibility, sustainability, and social impact.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            headline: "Crafting Digital Experiences for a Better World",
            body: "I've had the privilege of working with some amazing organizations. Here are a few of my favorites.",
          },
          end: {
            component: "img",
            src: "portfolio.png",
            alt: "Portfolio",
          },
        },
        grid: {
          layout: "portfolio",
          variant: "masonry",
          col: 2,
          headline: "Recent Projects",
          body: "Find a curated selection of real-world projects I've completed for nonprofits and companies as well as some examples I created to demonstrate my design & development skills.",
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          size: "region",
          headline: "Ready to Make a Difference? Let's Collaborate!",
          body: "I'm dedicated to helping businesses and nonprofits like yours thrive while protecting our planet. Get in touch and let's embark on a journey towards a more sustainable future for your organization.",
          btn: {
            label: "Start a Project",
            url: "/contact",
          },
        },
      },
    },
    {
      url: "blog",
      title:
        "Accessibility & Sustainability Tips for Businesses & Nonprofits | Blog | Dustin Heisey",
      description:
        "Explore my blog for insightful articles on user-centered, accessible, and environmentally sustainable web design practices. Stay updated with the latest trends and tips for eco-conscious businesses and nonprofits.",
      regions: {
        hero: {
          layout: "end-heavy",
          start: {
            component: "text",
            size: "page",
            overline: "Sustainable Design Insights",
            headline: "Explore the Green Web Revolution",
            body: "Immerse yourself in the latest trends, insights, and best practices for accessible and eco-conscious web design. Here you can find inspiration and resources to help you use the web as a powerful tool to spread your message and reach more people sustainably.",
          },
          end: { component: "img", src: "blog.png", alt: "wave" },
        },
        grid: {
          layout: "blog",
          variant: "masonry",
          headline: "Recent Posts",
        },
        action: {
          layout: "bg-pattern",
          theme: "primary",
          pattern: "topography",
          size: "region",
          headline: "Ready to Make a Difference? Let's Collaborate!",
          body: "I'm dedicated to helping businesses and nonprofits like yours thrive while protecting our planet. Get in touch and let's embark on a journey towards a more sustainable future for your organization.",
          btn: {
            label: "Start a Project",
            url: "/contact",
          },
        },
      },
    },
    {
      url: "contact",
      title: "Start Your Web Design Project with Me",
      description:
        "Ready to create a website that accurately represents your organization? Get in touch with me today to start your web design project.",
      regions: {
        form: {
          layout: "start-heavy",
          start: {
            component: "img",
            src: "contact.png",
            alt: "Contact",
          },
          end: {
            component: "form",
            headline: "Apply to Work With Me",
            body: "Fill out the application below, and let's make a difference together.",
            inputs: [
              {
                required: true,
                label: "Full Name",
                id: "full_name",
                type: "text",
              },
              { required: true, label: "Email", id: "email", type: "email" },
              {
                required: true,
                label: "Describe Your Organization",
                id: "organization_description",
                type: "textarea",
              },
              {
                required: true,
                label: "What Services Are You Interested In?",
                id: "services",
                type: "checkbox-cards",
                cards: [
                  { value: "Branding", icon: "branding" },
                  { value: "Web Design", icon: "web-design" },
                  { value: "Optimization", icon: "performance" },
                ],
              },
              {
                required: true,
                label: "Budget",
                id: "budget",
                type: "range",
                min: "500",
                max: "10000",
                step: "500",
                value: "500",
                output: "$",
              },
            ],
            submit: "Send Application",
          },
        },
      },
    },
    {
      url: "404",
      title: "Page Not Found",
      description:
        "The page you're looking for could not be found. Please use the navigation to find what you're looking for, or contact me for further assistance.",
      regions: {
        error: {
          layout: "center",
          content: {
            component: "text",
            size: "page",
            overline: "404",
            headline: "Page not found",
            body: "Sorry, the page you're looking for can't be found.",
            btn: { label: "Go Home", url: "/" },
          },
        },
      },
    },
  ],
  categories: {
    start: {
      hero: {
        layout: "end-heavy",
        start: {
          component: "text",
          size: "page",
          overline: "Sustainable Design Insights",
          headline: "Explore the Green Web Revolution",
          body: "Immerse yourself in the latest trends, insights, and best practices for accessible and eco-conscious web design. Here you can find inspiration and resources to help you use the web as a powerful tool to spread your message and reach more people sustainably.",
        },
        end: { component: "img", src: "blog.png", alt: "wave" },
      },
    },
    end: {
      action: {
        layout: "bg-pattern",
        theme: "primary",
        pattern: "topography",
        headline: "Ready to Make a Difference? Let's Collaborate!",
        body: "I'm dedicated to helping businesses and nonprofits like yours thrive while protecting our planet. Get in touch and let's embark on a journey towards a more sustainable future for your organization.",
        btn: {
          label: "Start a Project",
          url: "/contact",
        },
      },
    },
  },
  posts: {
    end: {
      action: {
        layout: "bg-pattern",
        theme: "primary",
        pattern: "topography",
        headline: "Ready to Make a Difference? Let's Collaborate!",
        body: "I'm dedicated to helping businesses and nonprofits like yours thrive while protecting our planet. Get in touch and let's embark on a journey towards a more sustainable future for your organization.",
        btn: {
          label: "Start a Project",
          url: "/contact",
        },
      },
    },
  },
};

module.exports = config;
