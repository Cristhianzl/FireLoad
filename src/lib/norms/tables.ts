export type RiskLevel = "low" | "medium" | "high";
export type ObstacleLevel = "free" | "few" | "many";
export type FireClass = "A" | "B";

export type ClassRow = {
  capacity: string;
  travelDistanceM: number;
  distanceSource: string;
};

export const RISK_THRESHOLDS = { lowMax: 300, mediumMax: 1200 } as const;

export const RISK_ORDER: RiskLevel[] = ["low", "medium", "high"];
export const OBSTACLE_ORDER: ObstacleLevel[] = ["free", "few", "many"];

export const CLASS_A: Record<RiskLevel, ClassRow> = {
  low: { capacity: "2-A", travelDistanceM: 25, distanceSource: "nbr12693" },
  medium: { capacity: "3-A", travelDistanceM: 20, distanceSource: "nbr12693" },
  high: { capacity: "4-A", travelDistanceM: 15, distanceSource: "nbr12693" },
};

export const CLASS_B: Record<RiskLevel, ClassRow> = {
  low: { capacity: "20-B", travelDistanceM: 15, distanceSource: "nbr12693" },
  medium: { capacity: "40-B", travelDistanceM: 15, distanceSource: "nbr12693" },
  high: { capacity: "80-B", travelDistanceM: 15, distanceSource: "nbr12693" },
};

// TCC methodology: the covered floor area of one extinguisher is the circle of
// radius = travel distance, scaled by how obstructed the layout is.
export const OBSTACLE_COEFFICIENT: Record<ObstacleLevel, number> = {
  free: 1,
  few: 0.5,
  many: 0.1,
};

export const MIN_UNITS_PER_FLOOR = 2;
export const SINGLE_UNIT_MAX_AREA_M2 = 100;
export const MANDATORY_EXIT_DISTANCE_M = 5;
