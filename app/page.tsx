'use client';

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>📚</span>
            <span className={styles.logoText}>EduLearn</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Transform Your Learning Journey
          </h1>
          <p className={styles.heroSubtitle}>
            Unlock your potential with personalized education powered by cutting-edge technology.
            Learn smarter, faster, and achieve your goals with EduLearn.
          </p>
          <div className={styles.heroCta}>
            <button className={styles.btnPrimary}>Get Started Free</button>
            <button className={styles.btnSecondary}>Watch Demo</button>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Active Students</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Courses</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Why Choose EduLearn?</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to excel in your educational journey
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Personalized Learning</h3>
              <p>AI-powered adaptive curriculum that adjusts to your learning pace and style</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals and certified educators</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Learn Anywhere</h3>
              <p>Access your courses on any device, anytime, anywhere</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Certified Programs</h3>
              <p>Earn recognized certificates upon course completion</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3>Interactive Community</h3>
              <p>Connect with peers and mentors in collaborative learning spaces</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your growth with detailed analytics and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p>
                At EduLearn, we believe education should be accessible, engaging, and effective for everyone.
                We're building the future of learning by combining innovative technology with proven pedagogical methods.
              </p>
              <p>
                Our platform adapts to each student's unique needs, helping them achieve their goals faster
                and with greater confidence. Join thousands of learners who are transforming their lives with EduLearn.
              </p>
              <button className={styles.btnPrimary}>Learn More</button>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderIcon}>🎓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Choose Your Plan</h2>
          <p className={styles.sectionSubtitle}>
            Flexible pricing options to fit your learning needs
          </p>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3 className={styles.planName}>Basic</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>0</span>
                <span className={styles.period}>/month</span>
              </div>
              <ul className={styles.planFeatures}>
                <li>✓ Access to 100+ free courses</li>
                <li>✓ Community forums</li>
                <li>✓ Basic progress tracking</li>
                <li>✓ Mobile app access</li>
              </ul>
              <button className={styles.btnSecondary}>Start Free</button>
            </div>
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <h3 className={styles.planName}>Pro</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>29</span>
                <span className={styles.period}>/month</span>
              </div>
              <ul className={styles.planFeatures}>
                <li>✓ Everything in Basic</li>
                <li>✓ 1000+ premium courses</li>
                <li>✓ 1-on-1 mentorship sessions</li>
                <li>✓ Certificates of completion</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
              </ul>
              <button className={styles.btnPrimary}>Start 7-Day Trial</button>
            </div>
            <div className={styles.pricingCard}>
              <h3 className={styles.planName}>Enterprise</h3>
              <div className={styles.planPrice}>
                <span className={styles.amount}>Custom</span>
              </div>
              <ul className={styles.planFeatures}>
                <li>✓ Everything in Pro</li>
                <li>✓ Custom course creation</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ API access</li>
                <li>✓ SSO integration</li>
                <li>✓ SLA guarantee</li>
              </ul>
              <button className={styles.btnSecondary}>Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <h2 className={styles.sectionTitle}>Ready to Get Started?</h2>
          <p className={styles.sectionSubtitle}>
            Join thousands of students already learning with EduLearn
          </p>
          <div className={styles.contactForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.btnPrimary}>Start Learning Today</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <span className={styles.logoIcon}>📚</span>
                <span className={styles.logoText}>EduLearn</span>
              </div>
              <p>Empowering learners worldwide with innovative educational technology.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Mobile App</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
