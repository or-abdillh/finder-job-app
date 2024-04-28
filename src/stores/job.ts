import type { Job } from "@/types/global";
import moment from "moment";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useJobStore = defineStore("job-store", () => {

    // initials
    const jobs = ref<Job[]>([
        {
            id: 1,
            company: "Apple",
            companyIcon: "fa-brands fa-apple",
            city: "Zurich Office",
            title: "UI/UX Designer",
            sallary: "$80-90k/year",
            type: "Full Time",
            experienceInYear: 3,
            expiredAt: moment().add(2, "days").toDate()
        },
        {
            id: 2,
            company: "Dribble",
            companyIcon: "fa-brands fa-dribbble",
            city: "New York",
            title: "Product Designer",
            sallary: "$60-85k/year",
            type: "Full Time",
            experienceInYear: 5,
            expiredAt: moment().add(3, "days").toDate()
        },
        {
            id: 3,
            company: "Google",
            companyIcon: "fa-brands fa-google",
            city: "Google",
            title: "Senior UI/UX Designer",
            sallary: "$240-280k/year",
            type: "Full Time",
            experienceInYear: 5,
            expiredAt: moment().add(2, "days").toDate()
        },
        {
            id: 3,
            company: "Figma",
            companyIcon: "fa-brands fa-figma",
            city: "Figma",
            title: "Senior Product",
            sallary: "$80-180k/year",
            type: "Full Time",
            experienceInYear: 3,
            expiredAt: moment().add(1, "days").toDate()
        }
    ])

    // getters
    const getJobs = computed(() => jobs)

    return {
        jobs,
        getJobs
    }
})