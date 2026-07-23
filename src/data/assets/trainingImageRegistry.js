/**
 * Centralized Enterprise Training Image Asset Registry
 * Single Source of Truth for all Corporate Training & Placement visual assets.
 * Ensures distinct, high-quality, topic-relevant placeholders with fallback support.
 */

export const TRAINING_IMAGE_REGISTRY = {
  "corporate-training": {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Corporate Workforce Training & Enterprise Upskilling Workshop",
    title: "Corporate Training",
  },
  "academic-partnerships": {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Academic University Partnership & Seminar Lecture",
    title: "Academic Training Partnerships",
  },
  "internship-programs": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Hands-on Student Internship Program & Team Mentorship Lab",
    title: "Internship Programs",
  },
  "placement-assistance": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Career Counseling and Candidate Placement Assistance Interview",
    title: "Placement Assistance",
  },
  "corporate-training-upskilling": {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Enterprise Upskilling & Executive Workforce Development",
    title: "Enterprise Upskilling",
  },
  "academic-training-partnerships": {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1200",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "College Bootcamp & Technical Academic Curriculum Integration",
    title: "Academic Partnerships",
  },
  "fullstack-development": {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Modern Full Stack Software Development Engineering Workspace",
    title: "Full Stack Development",
  },
  "react-development": {
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Frontend Web Development with React and Next.js Frameworks",
    title: "React Development",
  },
  "python-ai": {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Python Scripting, Machine Learning & Artificial Intelligence Concepts",
    title: "Artificial Intelligence & Python",
  },
  "data-analytics": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Data Analytics Dashboards, Business Intelligence & Visualization",
    title: "Data Analytics",
  },
  "cloud-devops": {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "Cloud Infrastructure Engineering, AWS, Azure & DevOps Pipelines",
    title: "Cloud Computing & DevOps",
  },
  "ui-ux-design": {
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800",
    fallback: "/assets/services/trainingCourses.jpg",
    alt: "UI/UX Product Interface Design Wireframing & Prototyping",
    title: "UI/UX Design",
  },
};

/**
 * Returns the training image asset metadata for a given key.
 * @param {string} key - Service key or identifier.
 * @returns {object} Asset object containing src, fallback, alt, title.
 */
export function getTrainingImageAsset(key) {
  if (!key || typeof key !== "string") {
    return TRAINING_IMAGE_REGISTRY["corporate-training"];
  }
  const normalizedKey = key.trim().toLowerCase();
  return (
    TRAINING_IMAGE_REGISTRY[normalizedKey] ||
    TRAINING_IMAGE_REGISTRY["corporate-training"]
  );
}
