import ServiceCard from "./ServiceCard"
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegCalendarAlt,FaUsers } from "react-icons/fa";






const Services = () => {
    return (
        <div
            className="w-[85%] mx-auto bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-MTNIrancell-DemiBold flex flex-col items-center justify-center gap-3 mt-20">

            <div
                className=" w-full text-center flex justify-center items-center flex-col gap-4">
                <h4
                className=" font-MTNIrancell-Bold text-2xl msm:text-4xl lg:text-5xl">
                    همه امکانات در یک پلتفرم
                </h4>
                <p
                    className=" text-[12px] esm:text-[16px] md:w-[70%] lg:w-[50%] lg:text-[20px]">
                    لرنیتو یک مجموعه نرم‌افزاری آنلاین قدرتمند است که تمام ابزارهای مورد نیاز برای اداره یک مدرسه یا دفتر موفق را در خود جای داده است
                </p>
            </div>

            <div 
            className="flex justify-center items-center flex-wrap gap-6 mt-14">
                <ServiceCard icon={<IoDocumentTextOutline />} title="صورتحساب، فاکتور و قراردادها بصورت آنلاین" text="کنترل ساده و ایمن تراکنش‌های مالی و حقوقی سازمان شما ارسال فاکتورها و قراردادهای سفارشی"/>
                <ServiceCard icon={<FaRegCalendarAlt />} title="برنامه‌ریزی آسان و پیگیری حضور و غیاب" text="برنامه‌ریزی و رزرو کلاس‌های درس در یک یا چند پردیس دانشگاهی. ثبت دقیق حضور و غیاب دانشجویان"/>
                <ServiceCard icon={<FaUsers />} title="پشتیبانی کاربری" text="ایمیل‌های ارسالی به افراد یا گروه‌ها را خودکار و پیگیری کنید. سیستم داخلی Skillline به سازماندهی سازمان شما کمک می‌کند"/>
            </div>
        </div>
    )
}

export default Services