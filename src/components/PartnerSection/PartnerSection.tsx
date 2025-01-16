import StatsSection from "../Counting/Counting"
import { LogoTicker } from "../Home/LogoTicker"

export const PartnerSection = () => {
    return(
        <>
         <div className="py-10 bg-slate-200">
        <StatsSection/>
        <LogoTicker/>
        </div>
        </>
    )
}