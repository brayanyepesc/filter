export default function AddPoints(num: number){
    var converted = num.toLocaleString(
                      "de-DE", // leave undefined to use the browser's locale,
                                 // or use a string like 'en-US' to override it.
                                 // German uses comma as decimal separator and period for thousands
                      { minimumFractionDigits: 0, maximumFractionDigits: 0 }
                      );
    return converted;
  }