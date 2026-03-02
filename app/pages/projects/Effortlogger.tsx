import React from "react";
import { ProjectLayout } from "@/app/layouts/ProjectLayout";
import {
    effortloggerDatabaseDesign,
    effortloggerMain,
    effortloggerLogin,
    effortloggerLogs,
    effortloggerEditor,
} from "~/assets/images/effortlogger";

export default function EffortLogger() {
  return (
    <ProjectLayout
      title="EffortLogger 2.0"
      subtitle="Modernizing Project Management with Efficiency and Privacy"
      overview="EffortLogger 2.0 is a revitalized project management tool designed to address the evolving needs of a data-driven company. Recognizing limitations in the existing Excel-based system, our team crafted a solution that prioritizes both enhanced efficiency and employee privacy."
      highlights={{
        languages: "Java, JavaFX, SQL",
        tools: "SQL Database, JavaFX UI, Agile methodologies",
      }}
      mainImage={effortloggerMain}
      sections={[
        {
          heading: "Project Highlights",
          content: (
            <ul>
              <li>
                <b>Back-End Development:</b> SQL database, server-side scripting
              </li>
              <li>
                <b>Software Engineering:</b> Agile methodologies, planning poker
                integration
              </li>
              <li>
                <b>Data Analysis:</b> Anonymization, reporting, analytics
                dashboards
              </li>
              <li>
                <b>Security:</b> Authentication, access control, audit trails
              </li>
            </ul>
          ),
        },
        {
          heading: "Overview",
          content: (
            <>
              <p>
                <b>Balancing Transparency and Privacy:</b> EffortLogger 2.0
                anonymizes individual data for reporting, while still allowing
                targeted improvement efforts under specific conditions. This
                ensures transparency while maintaining confidentiality.
              </p>
              <img
                src={effortloggerLogin}
                alt="EffortLogger Login"
                className="rounded-lg shadow my-6"
              />
              <p>
                <b>Boosting Security and Efficiency:</b> The new system
                implements robust authentication, access control, and a secure
                SQL database. Streamlined workflows and intuitive UI design make
                activity logging effortless.
              </p>
              <img
                src={effortloggerEditor}
                alt="EffortLogger Editor"
                className="rounded-lg shadow my-6"
              />
              <p>
                <b>Embracing Agile Practices:</b> EffortLogger 2.0 supports
                large-scale data handling and agile workflows. Customizable
                reports enable managers to analyze project progress and resource
                allocation effectively.
              </p>
              <img
                src={effortloggerLogs}
                alt="EffortLogger Logs"
                className="rounded-lg shadow my-6"
              />
            </>
          ),
        },
        {
          heading: "Key Improvements",
          content: (
            <ul className="list-disc pl-6">
              <li>
                Privacy: Anonymization of individual data while allowing targeted
                improvement efforts.
              </li>
              <li>
                Security: Secure database, authentication, and access control.
              </li>
              <li>
                Efficiency: Planning poker sessions, improved UI/UX, efficient
                logging.
              </li>
              <li>
                Agile Support: Large-scale data handling, SQL database,
                customizable reports.
              </li>
            </ul>
          ),
        },
        {
          heading: "Additional Details",
          content: (
            <ul className="list-disc pl-6">
              <li>
                User stories provide specific examples of user needs and
                acceptance criteria.
              </li>
              <li>
                Operational requirements outline technical specifications for
                developers.
              </li>
              <li>
                Storyboards showcase the planning poker functionality step by
                step.
              </li>
            </ul>
          ),
        },
      ]}
      summary="EffortLogger 2.0 delivers secure, efficient, and privacy-conscious project management. Its agile-friendly design enhances transparency, improves workflows, and strengthens data-driven decision-making."
    />
  );
}