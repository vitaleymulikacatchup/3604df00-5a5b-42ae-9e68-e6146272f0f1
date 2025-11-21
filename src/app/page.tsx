"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BookOpen, Briefcase, Building, Code, DollarSign, Facebook, Github, GraduationCap, HelpCircle, Instagram, Laptop, Linkedin, Rocket, Smartphone, Star, TrendingUp, Twitter, User, Users, Youtube, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Courses", id: "courses" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Happy IT-shnik"
          button={{
            text: "Enroll Now",
            href: "https://happy-it-shnik.com/enroll"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Launch Your IT Career"
          description="Master programming, web development, and data science with hands-on projects and expert mentorship. Join thousands of successful graduates."
          tag="IT Education"
          tagIcon={GraduationCap}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Students learning programming"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            {
              text: "Start Learning",
              href: "https://happy-it-shnik.com/courses"
            },
            {
              text: "View Programs",
              href: "courses"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Happy IT-shnik"
          description="We're dedicated to transforming beginners into skilled IT professionals through practical learning and industry-relevant curriculum."
          tag="About Us"
          tagIcon={Users}
          textboxLayout="default"
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Modern IT classroom"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Industry-Relevant Curriculum",
              description: "Learn the latest technologies and frameworks used by top companies",
              icon: Code
            },
            {
              title: "Hands-On Projects",
              description: "Build real applications that showcase your skills to employers",
              icon: Laptop
            },
            {
              title: "Expert Instructors",
              description: "Learn from experienced professionals currently working in the industry",
              icon: Award
            },
            {
              title: "Career Support",
              description: "Get guidance with job placement, resume building, and interview preparation",
              icon: Briefcase
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Meet Our Team",
              href: "team"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Modern Learning Experience"
          description="Experience the future of IT education with our innovative learning platform and mobile app"
          tag="Features"
          tagIcon={Smartphone}
          textboxLayout="default"
          showStepNumbers={true}
          features={[
            {
              id: 1,
              title: "Interactive Mobile Learning",
              description: "Access lessons, practice coding, and track your progress anywhere with our mobile app. Code on the go and never miss a learning opportunity.",
              phoneOne: {
                imageSrc: "/placeholders/placeholder1.webp",
                imageAlt: "Coding app interface"
              },
              phoneTwo: {
                imageSrc: "/placeholders/placeholder1.webp",
                imageAlt: "Learning progress interface"
              }
            },
            {
              id: 2,
              title: "Real-Time Code Collaboration",
              description: "Work on projects with classmates and instructors in real-time. Share code, get feedback, and learn together in our collaborative environment.",
              phoneOne: {
                imageSrc: "/placeholders/placeholder1.webp",
                imageAlt: "Code collaboration interface"
              },
              phoneTwo: {
                imageSrc: "/placeholders/placeholder1.webp",
                imageAlt: "Team workspace interface"
              }
            }
          ]}
        />
      </div>

      <div id="courses" data-section="courses">
        <ProductCardOne
          title="Popular Courses"
          description="Choose from our comprehensive selection of IT courses designed to meet industry demands"
          tag="Courses"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "web-dev",
              name: "Full Stack Web Development",
              price: "$2,499",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Web development course"
            },
            {
              id: "mobile-dev",
              name: "Mobile App Development",
              price: "$2,299",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Mobile app development course"
            },
            {
              id: "data-science",
              name: "Data Science & Analytics",
              price: "$2,799",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Data science course"
            }
          ]}
          buttons={[
            {
              text: "View All Courses",
              href: "https://happy-it-shnik.com/courses"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Learning Path"
          description="Flexible payment options and programs designed to fit your schedule and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Individual Course",
              badgeIcon: User,
              price: "$299/month",
              subtitle: "Perfect for single course enrollment",
              features: [
                "Access to one course",
                "Online materials included",
                "Community forum access",
                "Basic career support"
              ],
              buttons: [
                {
                  text: "Get Started",
                  href: "https://happy-it-shnik.com/enroll"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ]
            },
            {
              id: "bootcamp",
              badge: "Full Bootcamp",
              badgeIcon: Zap,
              price: "$899/month",
              subtitle: "Complete IT transformation program",
              features: [
                "All courses included",
                "1-on-1 mentoring sessions",
                "Career placement assistance",
                "Portfolio development",
                "Lifetime community access"
              ],
              buttons: [
                {
                  text: "Enroll Now",
                  href: "https://happy-it-shnik.com/bootcamp"
                },
                {
                  text: "Schedule Call",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact in Numbers"
          description="See the success of our students and the growth of our community"
          tag="Success Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "95%",
              description: "Job Placement Rate"
            },
            {
              id: "2",
              value: "5,000+",
              description: "Graduates Employed"
            },
            {
              id: "3",
              value: "$75K",
              description: "Average Starting Salary"
            },
            {
              id: "4",
              value: "200+",
              description: "Partner Companies"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Instructors"
          description="Learn from industry professionals with years of real-world experience"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Alex Rodriguez",
              role: "Senior Full Stack Instructor",
              description: "Former Senior Developer at Google with 8+ years building scalable web applications. Specializes in JavaScript, React, and Node.js.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Alex Rodriguez portrait",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/alexrodriguez"
                },
                {
                  icon: "Github",
                  url: "https://github.com/alexrodriguez"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Mobile Development Lead",
              description: "iOS and Android expert with experience at Apple and Meta. Passionate about teaching modern mobile development frameworks.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Sarah Chen portrait",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/sarahchen"
                },
                {
                  icon: "Twitter",
                  url: "https://twitter.com/sarahchen"
                }
              ]
            },
            {
              id: "3",
              name: "David Kim",
              role: "Data Science Instructor",
              description: "Machine Learning Engineer from Tesla with expertise in Python, AI, and big data analytics. Makes complex concepts accessible.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "David Kim portrait",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/davidkim"
                },
                {
                  icon: "Globe",
                  url: "https://davidkim.dev"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Success Stories"
          description="Hear from our graduates who transformed their careers through our programs"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Maria Garcia",
              role: "Software Developer at Microsoft",
              testimonial: "Happy IT-shnik completely changed my life. I went from working in retail to landing my dream job at Microsoft in just 8 months. The hands-on projects and mentorship were invaluable.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Maria Garcia portrait"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Full Stack Developer at Startup",
              testimonial: "The curriculum was exactly what I needed to break into tech. The instructors are genuinely invested in your success and the career support helped me negotiate a great salary.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "James Wilson portrait"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Data Analyst at Amazon",
              testimonial: "I loved the project-based learning approach. By graduation, I had a portfolio that impressed employers and the confidence to tackle any coding challenge.",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Lisa Thompson portrait"
            },
            {
              id: "4",
              name: "Michael Chang",
              role: "Mobile Developer at Netflix",
              testimonial: "The mobile development course exceeded my expectations. The instructors are industry experts and the job placement support is amazing. Highly recommend!",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Michael Chang portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Our Graduates Work At"
          description="Join thousands of alumni now working at leading technology companies worldwide"
          tag="Alumni Success"
          tagIcon={Building}
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our programs, admissions, and career services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need prior programming experience?",
              content: "No prior experience is required! Our courses are designed for complete beginners. We start with fundamentals and gradually build up your skills with hands-on projects and personalized support."
            },
            {
              id: "2",
              title: "What is the job placement rate?",
              content: "We maintain a 95% job placement rate within 6 months of graduation. Our career services team provides resume assistance, interview preparation, and connects you with our network of 200+ partner companies."
            },
            {
              id: "3",
              title: "Can I study while working full-time?",
              content: "Yes! We offer flexible scheduling options including evening and weekend classes. Our part-time program allows you to balance work and study, typically taking 12-16 months to complete."
            },
            {
              id: "4",
              title: "What programming languages will I learn?",
              content: "Depending on your chosen track, you'll learn languages like JavaScript, Python, Java, Swift, or Kotlin. We focus on industry-relevant technologies that employers are actively seeking."
            },
            {
              id: "5",
              title: "Is financing available?",
              content: "Yes, we offer various financing options including payment plans, income share agreements (ISA), and partnerships with leading education lenders. Financial aid and scholarships are also available for qualified students."
            },
            {
              id: "6",
              title: "What kind of support do students receive?",
              content: "Students get 1-on-1 mentoring, peer collaboration opportunities, 24/7 access to online resources, career counseling, and lifetime access to our alumni community and job board."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Career?"
          description="Join thousands of students who have successfully launched their IT careers. Get information about our programs and start your journey today."
          tagIcon={Rocket}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Students learning together"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Info"
          termsText="By clicking Get Info you agree to receive information about our programs via email and phone."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Happy IT-shnik"
          copyrightText="© 2025 Happy IT-shnik. All rights reserved."
          columns={[
            {
              title: "Programs",
              items: [
                {
                  label: "Full Stack Development",
                  href: "https://happy-it-shnik.com/fullstack"
                },
                {
                  label: "Mobile Development",
                  href: "https://happy-it-shnik.com/mobile"
                },
                {
                  label: "Data Science",
                  href: "https://happy-it-shnik.com/datascience"
                },
                {
                  label: "Bootcamp",
                  href: "https://happy-it-shnik.com/bootcamp"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "https://happy-it-shnik.com/careers"
                },
                {
                  label: "Press",
                  href: "https://happy-it-shnik.com/press"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "https://happy-it-shnik.com/blog"
                },
                {
                  label: "Success Stories",
                  href: "testimonials"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Student Portal",
                  href: "https://portal.happy-it-shnik.com"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Admissions",
                  href: "https://happy-it-shnik.com/admissions"
                },
                {
                  label: "Financial Aid",
                  href: "https://happy-it-shnik.com/financial-aid"
                },
                {
                  label: "Technical Support",
                  href: "https://help.happy-it-shnik.com"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/happyitshnik",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/happyitshnik",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/happyitshnik",
              ariaLabel: "Instagram"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/happyitshnik",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/happyitshnik",
              ariaLabel: "YouTube"
            }
          ]}
        />
      </div>
    </>
  );
}