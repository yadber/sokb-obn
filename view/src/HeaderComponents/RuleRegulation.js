import React from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";

export default function RuleRegulation({ isDarkTheme, userLoginInformation }) {
  return (
    <div className=" flex justify-center my-4 ">
      <div className={`block  p-6  border  rounded-lg shadow   max-w-lg ${isDarkTheme?"bg-gray-800 border-gray-700 hover:bg-gray-700":"bg-white border-gray-200 hover:bg-gray-100"}`}>
        <h5 className={`mb-2 text-2xl font-bold tracking-tight ${isDarkTheme?"text-white":"text-gray-900"}   text-center `}>
          OBN-SOKB RULES AND REGULATIONS
        </h5>
        <div className={`flex font-normal  ${isDarkTheme?"text-gray-400":"text-gray-700"} my-4 `}>
          <AiTwotoneCheckCircle className="text-2xl mr-2" />

          <p className="text-md break-before-right">
            Hojiin OBN kamiyyuu, rakkoo tasa fi taatee guyyaan uumamuun alatti,
            karooraa hoogganamuu qaba.(Except unexpected failurity and daily
            phenomenon, every work in OBN should be planned.)
          </p>
        </div>

        <div className={`flex font-normal  ${isDarkTheme?"text-gray-400":"text-gray-700"} my-4 `}>
          <AiTwotoneCheckCircle className="text-2xl mr-2" />

          <p className="text-md break-before-right">
          Leecalloo seeraan itti fayyadamuuf, bu'aa qabeessaa gochuu fi
          qulqullina fooyyessuuf karoorri dursuu qaba. (To use resources
          efficiently, to be effective and improve quality, it should be planned
          ahead.)
          </p>
        </div>

        <div className={`flex font-normal  ${isDarkTheme?"text-gray-400":"text-gray-700"} my-4 `}>
          <AiTwotoneCheckCircle className="text-2xl mr-2" />

          <p className="text-md break-before-right">
          Manaajimantii irraa kaasee hanga hojjetaatti qaamoleen jiran dhimma
          kanana hoogganamuu fi tumsuu qabu. (From a management to employ, every
          one should abide by and contribute his/ her part for its success)
      
          </p>
        </div>

        <div className={`flex font-normal  ${isDarkTheme?"text-gray-400":"text-gray-700"} my-4 `}>
          <AiTwotoneCheckCircle className="text-2xl mr-2" />

          <p className="text-md break-before-right">
          Bobbiin dirree torban lamaan kan qoratamu fi ramadamuu ta'ee ji'a keessa
        gaafa guyyaa 1ffaa fi 15ffa ta'a. (The apraisal of the previous and
        approval of the next Trip will be excuted in every two weeks on 1st day
        and 15th day of a month.)
    
      
          </p>
        </div>

      </div>
    </div>
  );
}
