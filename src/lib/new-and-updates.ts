export type NewsBodySection = {
  heading: string
  paragraphs?: string[]
  points?: { title: string; items: string[] }[]
}

export type NewsItem = {
  title: string
  description: string
  image: string
  category: string
  readTime: string
  body?: NewsBodySection[]
}

export const newsItems: NewsItem[] = [
  {
    title: "Ethiopia's new Arbitration and Conciliation Proclamation explained",
    description:
      "Proclamation No. 1237/2021 modernises Ethiopia's ADR framework, aligning it with the UNCITRAL Model Law to boost investor confidence.",
    image: "/LitigationDisputeResolutionandLegalRepresentation.jpg",
    category: "Dispute Resolution",
    readTime: "6 min read",
    body: [
      {
        heading: "Introduction",
        paragraphs: [
          "The Arbitration and Conciliation Working Procedure Proclamation No. 1237/2021 (the Proclamation) marks a significant modernisation of Ethiopia's Alternative Dispute Resolution (ADR) framework, largely replacing the scattered provisions previously found in the Civil Code and Civil Procedure Code. The law aims to bring Ethiopia's arbitration practice in line with international standards, particularly the UNCITRAL Model Law, to boost investor confidence and establish the country as a regional arbitration hub.",
        ],
      },
      {
        heading: "Key changes",
        paragraphs: [
          "The Proclamation introduces several pivotal changes that redefine the landscape of arbitration and conciliation in Ethiopia:",
        ],
        points: [
          {
            title: "Establishment of a stand-alone law",
            items: [
              "For the first time, Ethiopia has a comprehensive, dedicated law governing both domestic and international arbitration and conciliation proceedings.",
            ],
          },
          {
            title: "Adoption of the competence-competence principle",
            items: [
              "Arbitral tribunals are expressly granted the power to rule on their own jurisdiction, including objections concerning the existence or validity of the arbitration agreement — limiting premature court challenges.",
            ],
          },
          {
            title: "Finality of arbitral awards and limited judicial review",
            items: [
              "The Proclamation creates a presumption of finality for arbitral awards, a major shift from the old regime, which generally allowed an appeal unless explicitly waived.",
              "Judicial review is primarily limited to setting aside an award on grounds similar to the UNCITRAL Model Law (e.g. incapacity of a party, invalid agreement, due-process violations).",
              "A limited right to apply for cassation remains for a \"fundamental or basic error of law\", though parties may agree to waive it.",
            ],
          },
          {
            title: "Non-arbitrable matters defined",
            items: [
              "An illustrative list of non-arbitrable matters is provided, including family law cases, criminal matters, tax disputes, bankruptcy decisions, and certain land and administrative contract disputes.",
            ],
          },
          {
            title: "Interim measures of protection",
            items: [
              "Arbitral tribunals are explicitly empowered to issue interim measures (e.g. injunctions, security for costs) upon request.",
              "Courts are mandated to recognise and enforce these interim measures, including those issued by a foreign-seated tribunal.",
            ],
          },
          {
            title: "Regulation of arbitration centres",
            items: [
              "Arbitration centres may be established by government and private persons, with the Federal Attorney General empowered to license and supervise them.",
            ],
          },
          {
            title: "Conciliation procedure",
            items: [
              "A detailed framework for conciliation is provided; settlement agreements reached through conciliation are final, non-appealable and enforceable by the competent court.",
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Proclamation No. 1237/2021 represents a monumental stride toward modernising Ethiopia's commercial dispute-resolution system. By aligning domestic law with international best practice, it strengthens the autonomy of the arbitral process, enhances the finality of awards and fosters a more predictable environment for local and international investors. While its long-term impact will be realised through practice and judicial interpretation, the Proclamation lays a robust foundation for Ethiopia as a venue for international commercial arbitration.",
        ],
      },
    ],
  },
  {
    title: "Ethiopia begins selling stakes in state-owned company",
    description:
      "Ethiopia's state-owned telecommunications company has started selling shares to the public, in a move aimed at establishing a new national stock market.",
    image: "/intelectualproperty.jpg",
    category: "Capital Markets",
    readTime: "5 min read",
  },
  {
    title: "Government to Levy Tax on Social Media Income",
    description:
      "Ethiopia plans to tax income earned by content creators on social media platforms, including TikTok — what creators and businesses need to know.",
    image: "/practice-areas/EmploymentandLabor.jpg",
    category: "Tax Law",
    readTime: "7 min read",
  },
  {
    title: "Ethiopia enacts long-awaited startup law to boost digital economy",
    description:
      "Ethiopia has approved its long-anticipated startup law, marking a pivotal moment for the country's growing tech and innovation landscape.",
    image: "/realstates.jpg",
    category: "Technology & Startups",
    readTime: "6 min read",
  },
]
