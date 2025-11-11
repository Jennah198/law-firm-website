import { notFound } from "next/navigation";
import { insightsData } from "@/lib/insights";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";


export default function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const insight = insightsData.find((i) => i.slug === slug);

  if (!insight) return notFound();

  return (
    <div className="min-h-screen bg-muted p-10 flex justify-center">
      <div className="max-w-4xl w-full space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center text-secondary font-semibold text-xl">
          <span>Insights</span>
          <div className="flex space-x-4 text-base">
            <Link href="/who-we-are">
                <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">About</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">Contact</Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 rounded-md overflow-hidden">
          <Image src={insight.image} alt={insight.title} fill className="object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-secondary leading-snug">
          {insight.title}
        </h1>

        {/* Meta */}
        <div className="flex space-x-6 text-sm text-secondary opacity-80">
          <span>{insight.date}</span>
          <span>By {insight.author}</span>
          <span>{insight.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* MAIN CONTENT */}
          <div className="md:col-span-2 space-y-8 text-secondary">

            <section>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p>{insight.overview}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Key Changes</h2>
              <ul className="space-y-2 list-disc list-inside">
                {insight.keyChanges.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Expert Insight</h2>
              <p>{insight.expertInsight}</p>
            </section>

            {/* Comment Box */}
            <section>
              <h2 className="text-xl font-semibold mb-2">What It Means for You?</h2>
              <Card className="bg-card border border-border">
                <CardContent className="p-4 text-sm text-foreground flex items-center space-x-3">
                  <span>💬</span>
                  <input
                    type="text"
                    placeholder="Drop your Insight as a comment."
                    className="w-full focus:outline-none bg-transparent"
                  />
                </CardContent>
              </Card>
            </section>

          </div>

          {/* SIDEBAR */}
            <div className="space-y-10">

            {/* SIDEBAR */}
            <div className="flex flex-col justify-between space-y-10 h-full">

            <div className="space-y-10">

                {/* Related Articles */}
                <Card className="bg-accent border-none rounded-md">
                <CardContent className="p-4 space-y-3 text-secondary">
                    <h3 className="font-semibold text-lg">Related Articles</h3>
                    <div className="text-sm space-y-2">
                    <p>Tax Law Amendments 2025: What You Need to Know</p>
                    <p>Corporate Governance in East Africa</p>
                    </div>
                </CardContent>
                </Card>

                {/* Share Section */}
                <div className="space-y-3">
                <h3 className="font-semibold text-lg text-secondary">Share</h3>

                <div className="flex items-center space-x-4 pt-1">
                    <Link href="https://www.linkedin.com/company/shlo" aria-label="LinkedIn" className="group">
                    <Linkedin className="h-6 w-6 stroke-[1.75] text-secondary group-hover:text-[hsl(var(--primary))] transition-colors" />
                    </Link>
                    <Link href="https://facebook.com/shlo" aria-label="Facebook" className="group">
                    <Facebook className="h-6 w-6 stroke-[1.75] text-secondary group-hover:text-[hsl(var(--primary))] transition-colors" />
                    </Link>
                    <Link href="https://twitter.com/shlo" aria-label="Twitter" className="group">
                    <Twitter className="h-6 w-6 stroke-[1.75] text-secondary group-hover:text-[hsl(var(--primary))] transition-colors" />
                    </Link>
                    <Link href="https://instagram.com/shlo" aria-label="Instagram" className="group">
                    <Instagram className="h-6 w-6 stroke-[1.75] text-secondary group-hover:text-[hsl(var(--primary))] transition-colors" />
                    </Link>
                </div>
                </div>

                {/* Author Box */}
                <div className="flex items-center space-x-4 pt-4">
                <div className="w-16 h-16 bg-accent rounded-full" />
                <div className="text-sm">
                    <p className="font-semibold">Attorney Sadam Hussein</p>
                    <p className="opacity-70">Specialized in Corporate Law</p>
                </div>
                </div>

            </div>

            {/* Back Button → now pushed to bottom */}
            <Link href="/insights">
                <Button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md shadow hover:bg-primary hover:text-primary-foreground transition-colors">
                ← Back to Insights
                </Button>
            </Link>

            </div>
            </div>

        </div>
      </div>
    </div>
  );
}