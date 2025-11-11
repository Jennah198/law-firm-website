import { notFound } from "next/navigation";
import { newsItems } from "@/lib/new-and-updates";
import { slugify } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer"
import { ContactSection } from "@/features/sections/contact-section"


interface Params {
  params: {
    slug: string;
  };
}

export default function NewsDetailPage({ params }: Params) {
  const { slug } = params;

  // Find the news item that matches the slug
  const newsItem = newsItems.find((item) => slugify(item.title) === slug);

  if (!newsItem) return notFound();

  return (
    <div className="w-full flex justify-center bg-background p-6">
      <div className="max-w-7xl w-full space-y-8 text-foreground">
        {/* Header - Centered */}
        <div className="pt-8 text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">News and Updates</h1>
        </div>

        {/* Title - Centered */}
        <div className="text-left">
          <h2 className="text-4xl font-bold leading-tight text-secondary">Legal Update: Highlights Of Key Changes And Introductions
Made By The New Arbitration And Conciliation Proclamation</h2>
        </div>

        {/* Share Buttons - Centered */}
        <div className="flex justify-left space-x-3">
          <Button variant="secondary" className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Font Size</Button>
          <Button variant="secondary" className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Print</Button>
          <Button variant="secondary" className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Email</Button>
          <Button variant="secondary" className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Comment</Button>
        </div>

        {/* Rating - Centered */}
        <div className="flex justify-left items-center space-x-4 text-sm text-muted-foreground">
          <span>Rate This Item</span>
          <span>⭐⭐⭐⭐⭐ (23 votes)</span>
        </div>

        {/* Split layout with proper gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Image - Left */}
            <div className="w-full h-48 rounded-md overflow-hidden shadow-md">
              <Image
                src={newsItem.image || "/placeholder.svg"}
                alt={newsItem.title}
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Introduction - Left */}
            <section>
              <h3 className="text-xl font-semibold mb-2 text-secondary">Introduction</h3>
              <p className="text-sm leading-relaxed text-foreground">
                Read expert insights on a variety of legal topics. From business and family law to criminal defense, get the knowledge you need to stay informed.
                The Arbitration and Conciliation Working Procedure Proclamation No. 1237/2021 (the Proclamation) marks a significant modernization of Ethiopia's Alternative Dispute Resolution (ADR) framework, largely replacing the scattered provisions previously found in the Civil Code and Civil Procedure Code. This new law aims to bring Ethiopia's arbitration practice in line with international standards, particularly the UNCITRAL Model Law, to boost investor confidence and establish the country as a regional arbitration hub.
              </p>
            </section>

            {/* Key Changes - Left */}
            <section>
              <h3 className="text-xl font-semibold mb-2 text-secondary">Key Changes</h3>
              <div className="space-y-4 text-sm text-foreground">
                <p>The new Proclamation introduces several pivotal changes that redefine the landscape of arbitration and conciliation in Ethiopia:</p>
                
                <div>
                  <p className="font-bold text-secondary">Establishment of a Stand-Alone Law:</p>
                  <p>For the first time, Ethiopia has a comprehensive, dedicated law governing both domestic and international arbitration and conciliation proceedings.</p>
                </div>

                <div>
                  <p className="font-bold text-secondary">Adoption of the Competence-Competence Principle:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Arbitral tribunals are now expressly granted the power to rule on their own jurisdiction, including any objections concerning the existence or validity of the arbitration agreement. This limits the ability of a party to prematurely challenge the arbitration in court.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-secondary">Finality of Arbitral Awards and Limited Judicial Review:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The Proclamation creates a presumption of finality for arbitral awards, a major shift from the old regime which generally allowed for an appeal unless explicitly waived by the parties.</li>
                    <li>Judicial review is now primarily limited to setting aside an award based on grounds similar to the UNCITRAL Model Law (e.g., incapacity of a party, invalid agreement, due process violations).</li>
                    <li>However, a limited right to apply for cassation (review by the Supreme Court Cassation Bench) remains available for cases involving a "fundamental or basic error of law," though parties may agree to waive this right.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-secondary">Non-Arbitrable Matters Defined:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The Proclamation provides a clearer, though illustrative, list of matters that are not subject to arbitration, including: family law cases (divorce, adoption, etc.), criminal matters, tax disputes, bankruptcy decisions, and certain land and administrative contract disputes.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-secondary">Interim Measures of Protection:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Arbitral tribunals are explicitly empowered to issue interim measures of protection (e.g., injunctions, security for costs) upon request.</li>
                    <li>Importantly, courts are also mandated to recognize and enforce these interim measures, even those issued by a foreign-seated tribunal.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-secondary">Arbitration Centers Regulation:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>It allows for the establishment of arbitration centers by both the government and private persons, with the Federal Attorney General empowered to license and supervise these institutions, creating a clearer regulatory framework.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-secondary">Conciliation Procedure:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The Proclamation provides a detailed legal framework for conciliation, affirming that settlement agreements reached through this mechanism are final, non-appealable, and legally enforceable by the competent court.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Conclusion - Right */}
            <section>
              <h3 className="text-xl font-semibold mb-2 text-secondary">Conclusion</h3>
              <p className="text-sm leading-relaxed text-foreground">
                The Arbitration and Conciliation Proclamation No. 1237/2021 represents a monumental stride toward modernizing Ethiopia's legal system for commercial dispute resolution. By aligning domestic law with international best practices like the UNCITRAL Model Law, it strengthens the autonomy of the arbitral process, enhances the finality of awards, and fosters a more predictable legal environment for both local and international investors. While its long-term impact will be fully realized through practical application and judicial interpretation, the Proclamation has laid a robust foundation for Ethiopia to become a more attractive venue for international commercial arbitration.
              </p>
            </section>

            {/* Related Articles - Right */}
            <Card className="bg-accent">
              <CardContent className="p-4 text-sm">
                <h4 className="font-semibold text-lg mb-3 text-secondary">Related Articles</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {newsItems
                    .filter((item) => item.title !== newsItem.title)
                    .map((item, index) => (
                      <li key={index}>
                        <Link href={`/news-and-updates/${slugify(item.title)}`} className="hover:underline hover:text-secondary">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            {/* Image Placeholder - Right */}
            <div className="w-full h-48 bg-accent rounded-md" />
            
            {/* Copyright - Right */}
            <p className="text-xs text-muted-foreground">
              Copyright ©2025 Placeholder Legal Consulting. All rights reserved.
            </p>
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}