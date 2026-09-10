import {
  CLASS_A,
  CLASS_B,
  MANDATORY_EXIT_DISTANCE_M,
  MIN_UNITS_PER_FLOOR,
  OBSTACLE_COEFFICIENT,
  OBSTACLE_ORDER,
  RISK_THRESHOLDS,
  SINGLE_UNIT_MAX_AREA_M2,
  type FireClass,
  type ObstacleLevel,
  type RiskLevel,
} from "@/lib/norms/tables";

export type LoadItem = { hi: number; massKg: number };

export type ClassEstimate = {
  fireClass: FireClass;
  capacity: string;
  travelDistanceM: number;
  coverageAreaM2: Record<ObstacleLevel, number>;
  count: Record<ObstacleLevel, number>;
};

export type ExtinguisherEstimate = {
  areaM2: number;
  risk: RiskLevel;
  classA: ClassEstimate;
  classB: ClassEstimate;
  minUnitsPerFloor: number;
  singleUnitAllowed: boolean;
  mandatoryExitDistanceM: number;
};

export function classifyRisk(specificLoad: number): RiskLevel {
  if (specificLoad <= RISK_THRESHOLDS.lowMax) return "low";
  if (specificLoad <= RISK_THRESHOLDS.mediumMax) return "medium";
  return "high";
}

export function specificFireLoad(items: LoadItem[], areaM2: number): number {
  if (!(areaM2 > 0)) {
    throw new Error("Floor area must be greater than zero.");
  }
  const totalHeat = items.reduce((sum, item) => {
    const mass = item.massKg > 0 ? item.massKg : 0;
    return sum + mass * item.hi;
  }, 0);
  return totalHeat / areaM2;
}

export function coverageAreaM2(
  travelDistanceM: number,
  obstacle: ObstacleLevel,
): number {
  return Math.PI * travelDistanceM ** 2 * OBSTACLE_COEFFICIENT[obstacle];
}

export function estimateCount(
  areaM2: number,
  travelDistanceM: number,
  obstacle: ObstacleLevel,
): number {
  const coverage = coverageAreaM2(travelDistanceM, obstacle);
  return Math.max(1, Math.ceil(areaM2 / coverage));
}

function classEstimate(
  fireClass: FireClass,
  areaM2: number,
  risk: RiskLevel,
): ClassEstimate {
  const row = fireClass === "A" ? CLASS_A[risk] : CLASS_B[risk];
  const coverage = {} as Record<ObstacleLevel, number>;
  const count = {} as Record<ObstacleLevel, number>;
  for (const obstacle of OBSTACLE_ORDER) {
    coverage[obstacle] = coverageAreaM2(row.travelDistanceM, obstacle);
    count[obstacle] = estimateCount(areaM2, row.travelDistanceM, obstacle);
  }
  return {
    fireClass,
    capacity: row.capacity,
    travelDistanceM: row.travelDistanceM,
    coverageAreaM2: coverage,
    count,
  };
}

export function estimateExtinguishers(
  areaM2: number,
  risk: RiskLevel,
): ExtinguisherEstimate {
  if (!(areaM2 > 0)) {
    throw new Error("Floor area must be greater than zero.");
  }
  return {
    areaM2,
    risk,
    classA: classEstimate("A", areaM2, risk),
    classB: classEstimate("B", areaM2, risk),
    minUnitsPerFloor: MIN_UNITS_PER_FLOOR,
    singleUnitAllowed: areaM2 < SINGLE_UNIT_MAX_AREA_M2,
    mandatoryExitDistanceM: MANDATORY_EXIT_DISTANCE_M,
  };
}
