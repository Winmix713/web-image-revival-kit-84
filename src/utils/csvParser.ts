
import Papa from 'papaparse';
import type { Match } from '@/types/league';

export const parseMatchesCSV = async (file: File): Promise<Match[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const matches: Match[] = results.data
            .filter((rawMatch: any) => {
              // Filter out rows without required data
              return (
                rawMatch.date !== undefined &&
                rawMatch.home_team !== undefined &&
                rawMatch.away_team !== undefined
              );
            })
            .map((rawMatch: any) => {
              // Map to Match type
              return {
                date: rawMatch.date || "",
                home_team: rawMatch.home_team || "",
                away_team: rawMatch.away_team || "",
                ht_home_score: Number(rawMatch.ht_home_score || 0),
                ht_away_score: Number(rawMatch.ht_away_score || 0),
                home_score: Number(rawMatch.home_score || 0),
                away_score: Number(rawMatch.away_score || 0),
                round: rawMatch.round || "Unknown",
              };
            });

          if (matches.length === 0) {
            reject(new Error("No valid matches found in the CSV file"));
          } else {
            resolve(matches);
          }
        } catch (error) {
          reject(new Error(`Error processing CSV data: ${error}`));
        }
      },
      error: (error) => {
        reject(new Error(`Error parsing CSV: ${error.message}`));
      },
    });
  });
};
