"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Brain, Code, Cloud, Sparkles, Users, Trophy, ArrowRight, Play, MessageCircle } from "lucide-react"
import Link from "next/link"
import { AuthModal } from "@/components/auth-modal"

export default function HomePage() {
  const [courseTags, setCourseTags] = useState<string[]>(["Machine Learning", "Python"])
  const [newTag, setNewTag] = useState("")

  const addTag = () => {
    if (newTag.trim() && !courseTags.includes(newTag.trim())) {
      setCourseTags([...courseTags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setCourseTags(courseTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
              EduMind AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <AuthModal>
              <Button variant="outline">Login</Button>
            </AuthModal>
            <AuthModal>
              <Button>Get Started</Button>
            </AuthModal>
          </div>
        </div>
      </nav>

      {/* Hero Section with Placeholder for AI Professor */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Revolutionary AI Education
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-balance font-[family-name:var(--font-space-grotesk)]">
                  Learn with Your
                  <span className="text-primary"> AI Professor</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  Experience deeply personalized learning in machine learning, web development, and cloud computing
                  through immersive interactions with our intelligent AI professor.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <AuthModal>
                  <Button size="lg" className="text-lg px-8">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning
                  </Button>
                </AuthModal>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/meet-professor">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Meet Your Professor
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Support</div>
                </div>
              </div>
            </div>

            {/* AI Professor Placeholder */}
            <div className="h-[600px] w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20">
              <div className="text-center space-y-4">
                <Brain className="h-24 w-24 text-primary mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">AI Professor</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Your intelligent learning companion will appear here once the 3D components are properly configured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Generation Section */}
      <section id="courses" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Generate Your Perfect Course
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]">
              Use advanced tags to create personalized learning paths tailored to your goals and skill level.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Course Generator</CardTitle>
              <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                Add tags to customize your learning experience. Our AI professor will create a personalized curriculum
                just for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {courseTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="ml-1 hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag (e.g., Neural Networks, React, AWS)"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                  className="font-[family-name:var(--font-dm-sans)]"
                />
                <Button onClick={addTag}>Add Tag</Button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)]">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    Intelligent course adaptation
                  </p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)]">Interactive</h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    Real-time Q&A with AI professor
                  </p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)]">Project-Based</h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    Hands-on learning with feedback
                  </p>
                </div>
              </div>

              <AuthModal>
                <Button className="w-full" size="lg">
                  Generate My Course
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </AuthModal>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Revolutionary Learning Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
              Our platform combines cutting-edge AI technology with immersive experiences to create the most engaging
              educational environment ever built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Machine Learning Mastery</CardTitle>
                <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                  Deep dive into neural networks, algorithms, and AI fundamentals with hands-on projects and real-world
                  applications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Code className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Web Development</CardTitle>
                <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                  Master modern frameworks, full-stack development, and best practices through interactive coding
                  sessions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Cloud className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Cloud Computing</CardTitle>
                <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                  Learn AWS, Azure, and GCP with practical deployments and scalable architecture design.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Personalized Learning</CardTitle>
                <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                  AI adapts to your learning style, pace, and goals for maximum effectiveness and engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Real-time Interaction</CardTitle>
                <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                  Ask questions, get instant feedback, and engage in meaningful conversations with your AI professor.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Project Assessments</CardTitle>
                <CardDescription className="font-[family-name:var(--font-dm-sans)]">
                  Build real projects with guided feedback and industry-standard evaluation criteria.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl opacity-90 font-[family-name:var(--font-dm-sans)]">
              Join thousands of learners who have already discovered the power of AI-driven education. Start your
              personalized learning experience today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AuthModal>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Trial
                </Button>
              </AuthModal>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/schedule-demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
                EduMind AI
              </span>
            </div>
            <div className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              © 2025 EduMind AI. Revolutionizing education through artificial intelligence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}