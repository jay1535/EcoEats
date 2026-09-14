"use server";

const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";

async function fetchMealDB(endpoint, revalidate = 86400) {
  const response = await fetch(`${MEALDB_BASE}${endpoint}`, {
    next: {
      revalidate,
    },
    headers: {
      Accept: "application/json",
      "User-Agent": "ServdRecipeApp/1.0",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("MealDB Error:", {
      status: response.status,
      statusText: response.statusText,
      endpoint,
      response: errorText,
    });

    throw new Error(
      `MealDB request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

// Random recipe
export async function getRecipeOfTheDay() {
  try {
    const data = await fetchMealDB("/random.php", 86400);

    return {
      success: true,
      recipe: data?.meals?.[0] || null,
    };
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return {
      success: false,
      recipe: null,
      error: error.message,
    };
  }
}

// Categories
export async function getCategories() {
  try {
    const data = await fetchMealDB("/list.php?c=list", 604800);

    return {
      success: true,
      categories: data?.meals || [],
    };
  } catch (error) {
    console.error("Error fetching categories:", error);

    return {
      success: false,
      categories: [],
      error: error.message,
    };
  }
}

// Areas
export async function getAreas() {
  try {
    const data = await fetchMealDB("/list.php?a=list", 604800);

    return {
      success: true,
      areas: data?.meals || [],
    };
  } catch (error) {
    console.error("Error fetching areas:", error);

    return {
      success: false,
      areas: [],
      error: error.message,
    };
  }
}

// Meals by category
export async function getMealsByCategory(category) {
  try {
    const data = await fetchMealDB(
      `/filter.php?c=${encodeURIComponent(category)}`,
      86400
    );

    return {
      success: true,
      meals: data?.meals || [],
      category,
    };
  } catch (error) {
    console.error("Error fetching meals by category:", error);

    return {
      success: false,
      meals: [],
      category,
      error: error.message,
    };
  }
}

// Meals by area
export async function getMealsByArea(area) {
  try {
    const data = await fetchMealDB(
      `/filter.php?a=${encodeURIComponent(area)}`,
      86400
    );

    return {
      success: true,
      meals: data?.meals || [],
      area,
    };
  } catch (error) {
    console.error("Error fetching meals by area:", error);

    return {
      success: false,
      meals: [],
      area,
      error: error.message,
    };
  }
}