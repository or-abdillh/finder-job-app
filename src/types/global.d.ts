export type User = {
    name: string,
    avatar: string
}

export type Job = {
    id: number,
    company: string,
    companyIcon: string,
    city: string,
    title: string,
    sallary: string,
    experienceInYear: number,
    type: "Full Time" | "Part Time",
    expiredAt: Date,
}