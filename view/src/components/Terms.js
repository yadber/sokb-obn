import React from "react";

export default function Terms({onCheckTerms}) {
  return (
    <div className="  bg-gray-100 dark:bg-gray-800">
      <div className="p-6 space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Hojiin OBN kamiyyuu, rakkoo tasa fi taatee guyyaan uumamuun alatti,
          karooraa hoogganamuu qaba. (Except unexpected failurity and daily
          phenomenon, every work in OBN should be planned.)
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Leecalloo seeraan itti fayyadamuuf, bu'aa qabeessaa gochuu fi
          qulqullina fooyyessuuf karoorri dursuu qaba. (To use resources
          efficiently, to be effective and improve quality, it should be planned
          ahead.)
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Manaajimantii irraa kaasee hanga hojjetaatti qaamoleen jiran dhimma
          kanana hoogganamuu fi tumsuu qabu. (From a management to employ, every
          one should abide by and contribute his/ her part for its success)
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Bobbiin dirree torban lamaan kan qoratamu fi ramadamuu ta'ee ji'a keessa
        gaafa guyyaa 1ffaa fi 15ffa ta'a. (The apraisal of the previous and
        approval of the next Trip will be excuted in every two weeks on 1st day
        and 15th day of a month.)
        </p>
       <input type="checkbox" onChange={()=>onCheckTerms(prevState => !prevState)} className="ml-2 mr-2 h-4 w-4" />
       <label className="text-black dark:text-white text-xl">Agree to Terms and Conditions?</label>
      </div>
    </div>
  );
}
