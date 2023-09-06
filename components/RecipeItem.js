"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { RecipeComponent } from "@/styles/ComponentStyles";
export default function RecipeItem({ data }) {
  const { image, title, id } = data;
  return (
    <RecipeComponent>
      <div className="recipeImage">
        <img src={image} alt="img" />
      </div>
      <div className="recipeBody">
        <p className="recipeName">{title}</p>
        <Link href={`/recipe/${id}`} className="PrimaryBtn btn">
          Visit Recipe
        </Link>
      </div>
    </RecipeComponent>
  );
}
