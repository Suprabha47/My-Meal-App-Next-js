import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

export async function generateMetadata({ params }) {
  const { dynamic } = await params;
  const meal = await getMeal(dynamic);
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetail({ params }) {
  const { dynamic } = await params;
  const meal = await getMeal(dynamic);
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailTo:${meal.creator_mail}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
