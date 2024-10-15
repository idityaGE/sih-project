import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Calendar, FileText, Globe, MessageCircle, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <header className="bg-gradient-to-r from-blue-600 to-green-400 text-white">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">CityCoopPlatform</div>
            <div className="hidden md:flex space-x-4">
              <a href="#features" className="hover:text-blue-200">Features</a>
              <a href="#how-it-works" className="hover:text-blue-200">How It Works</a>
              <a href="#benefits" className="hover:text-blue-200">Benefits</a>
              <a href="#contact" className="hover:text-blue-200">Contact Us</a>
              <a href="/login" className="hover:text-blue-200">Login/Register</a>
            </div>
            <Button variant="outline" className="md:hidden">Menu</Button>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Cities through Seamless Inter-departmental Cooperation</h1>
          <p className="text-xl mb-8">A digital platform designed to streamline collaboration, resource sharing, and project planning between city departments.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">Get Started</Button>
        </div>
      </header>

      <main>
        <section id="features" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features of the Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Real-Time Collaboration", description: "Share data and project updates between departments." },
                { icon: BarChart2, title: "Resource Sharing", description: "Optimize resource usage with an integrated resource inventory." },
                { icon: Calendar, title: "Project Planning", description: "Streamlined task scheduling and unified project phasing." },
                { icon: Globe, title: "Conflict Detection", description: "Identify overlapping projects and resolve conflicts in planning." },
                { icon: MessageCircle, title: "Discussion Forums", description: "Foster communication through intra and inter-departmental forums." },
                { icon: FileText, title: "Training & Workshops", description: "Enhance skills through collaborative workshops and seminars." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-blue-600 mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Register your department: Create accounts for your team with role-based access.",
                "Share project data: Upload ongoing and upcoming project information, resources, and timelines.",
                "Collaborate in real-time: Manage tasks, share updates, and coordinate with other departments.",
                "Plan smarter: Use geospatial data to avoid project overlaps and optimize resource allocation.",
                "Join discussions: Engage in forums to resolve issues and brainstorm solutions.",
                "Attend workshops: Access training and seminars for capacity building.",
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Improved Efficiency", description: "Eliminate project delays due to miscommunication." },
                { title: "Cost Savings", description: "Optimize resource usage and reduce duplication of efforts." },
                { title: "Better Coordination", description: "Real-time updates keep all departments in sync." },
                { title: "Enhanced Transparency", description: "Clear communication and task tracking improve accountability." },
                { title: "Increased Capacity", description: "Access training programs and workshops to build departmental expertise." },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Rajesh Kumar", role: "Urban Planning Department", quote: "This platform has revolutionized how we coordinate with other departments. Project overlaps are now a thing of the past!" },
                { name: "Priya Sharma", role: "Public Works Department", quote: "The resource sharing feature has helped us optimize our budget and complete projects faster than ever before." },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="italic mb-4">&ldquo{testimonial.quote}&ldquo</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <div className="space-x-4">
              <Button size="lg" variant="secondary">Sign Up Now</Button>
              <Button size="lg" variant="secondary">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Department/Organization" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">CityCoopPlatform</h3>
              <p className="text-sm">Empowering cities through seamless inter-departmental cooperation.</p>
            </div>
            <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-blue-400 mx-2">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-blue-400 mx-2">Terms of Service</a>
              <a href="#" className="text-sm hover:text-blue-400 mx-2">FAQ</a>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
              <select className="bg-gray-700 text-white text-sm rounded-md px-2 py-1">
                <option>English</option>
                <option>हिन्दी</option>
                <option>मराठी</option>
                <option>தமிழ்</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-8 text-sm">
            © 2023 CityCoopPlatform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}