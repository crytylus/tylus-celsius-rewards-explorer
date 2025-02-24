/** ===========================================================================
 * Types & Config
 * ============================================================================
 */

export interface DistributionData {
  type: string;
  dateCoefficient: string;
  date: string;
  value: string;
  newBalance: string;
  originalInterestCoin: null;
  regInterestRateBasis: string;
  regInterestRateAmount: string;
  specInterestRateBasis: string;
  specInterestRateAmount: string;
  totalInterest: string;
  threshold: string;
}

type LOYALTY_TIERS = "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "NONE";

export interface LoyaltyTier {
  title: LOYALTY_TIERS;
  level: number;
  minimum_cel_percentage: string;
  maximum_cel_percentage: string;
  interest_bonus: string;
  loan_interest_bonus: string;
}

export interface CoinData {
  interestCoin: string;
  totalInterestInCoin: string;
  totalInterestInUsd: string;
  distributionRuleUsed: string;
  interest_on_first_n_coins: string;
  earningInterestInCel: boolean;
  loyaltyTier: LoyaltyTier;
  distributionData: DistributionData[];
  originalInterestCoin: string;
  totalInterestInOriginalInterestCoin: string;
}


export interface CoinDataMap {
  version: number;
  data: CoinData[];
}


export interface PortfolioEntry {
  total: string;
  totalEarnInCEL: string;
  totalInterestInCoin: string;
  totalInterestInUsd: string;
  numberOfUsersHolding: string;
  collaterals_locked: string;
  collaterals_unlocked: string;
  withdrawals: string;
  deposits: string;
  swap_out: string;
  swap_in: string;
  loan_out: string;
  loan_in: string;
  transfer_out: string;
  transfer_in: string;
  interest_pay: string;
  awards: string;
}

export interface RankingsLevels {
  topOne: string;
  topTen: string;
  topHundred: string;
  topThousand: string;
  topTenThousand: string;
  medianValue: string;
}

type Portfolio = { [coin: string]: PortfolioEntry };

interface CoinDistribution {
  uuid: string;
  total: string;
  balance: string;
  collateral_locked: string;
  collateral_unlocked: string;
  withdrawal: string;
  deposit: string;
  rewards: string;
  initialBalance: string;
}
type CoinDistributions = { [coin: string]: CoinDistribution[] };
type CoinDistributionLevelsMap = { [coin: string]: RankingsLevels };

export interface LoyaltyTierSummary {
  platinum: string;
  gold: string;
  silver: string;
  bronze: string;
  none: string;
}

export interface Stats {
  totalUsers: string;
  totalUsersEarningInCel: string;
  maximumPortfolioSize: string;
  averageNumberOfCoinsPerUser: string;
  totalPortfolioCoinPositions: string;
  totalInterestPaidInUsd: string;
  maxInterestEarned: string;
  averageInterestPerUser: string;
}

export interface CelsiusRewardsMetrics {
  portfolio: Portfolio;
  loyaltyTierSummary: LoyaltyTierSummary;
  coinDistributions: CoinDistributions;
  coinDistributionsLevels: CoinDistributionLevelsMap;
  interestEarnedRankings: RankingsLevels;
  stats: Stats;
}
