/* eslint-disable prettier/prettier */
import { title } from "@/components/primitives";

interface SummaryOfUsProps {
    title: string;
    count: string | number;
}

const SummaryOfUs = ({ title, count }: SummaryOfUsProps) => {
    return (
        <li className="shadow-2xl gradient-border flex justify-center items-center flex-col w-[20rem] h-[7rem] p-4 rounded-[2rem]">
            <h2 className="text-4xl font-daBold text-primary">{count}</h2>
            <p className="text-zinc-400">{title}</p>
        </li>
    );
};

export default function AboutPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <section className="relative load-text z-40 top-24 flex flex-col justify-center items-center text-center">
                <div className="">
                    <h1 className={`${title()} font-daBold shadow-2xl`}>
                        با ما بیشتر &nbsp;
                        <br />
                        <span className={title({ color: "blue" })}>آشنا</span>
                        &nbsp; بشوید
                    </h1>
                    <div className="flex flex-col w-full justify-center  mt-8 absolute items-center left-1/2 -translate-x-1/2">
                        <div className="my-4">
                            <span className="text-small font-bold gradient-border mb-4 bg-zinc-800 p-2 px-12 rounded-full text-secendry">
                                درباره ما
                            </span>
                            <p className="sm:w-[50rem] min-w-[20rem]  mt-6 gradient-border p-4 rounded-3xl shadow-2xl">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد کتابهای زیادی در شصت و
                                سه درصد گذشته حال و آینده شناخت فراوان جامعه و
                                متخصصان را می طلبد
                            </p>
                        </div>
                        <div className="my-4">
                            <span className="text-small font-bold gradient-border mb-4 bg-zinc-800 p-2 px-12 rounded-full text-secendry">
                                خلاصه‌ای از ما
                            </span>
                            <ul className="flex-col sm:flex-row gap-4 flex justify-between items-center w-[50rem] mt-6 p-4 rounded-3xl">
                                <SummaryOfUs title="مشتری" count={`۱۰۰۰+`} />
                                <SummaryOfUs title="مشتری" count={`۱۰۰۰+`} />
                                <SummaryOfUs title="مشتری" count={`۱۰۰۰+`} />
                                <SummaryOfUs title="مشتری" count={`۱۰۰۰+`} />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="absolute bottom-0 flex flex-col justify-center items-center">
                <span className="w-[10rem] load-blur h-screen blur-3xl sticky bg-primary rounded-full" />
            </section>
        </div>
    );
}
