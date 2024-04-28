<template>
    <header class="fixed top-0 left-0 right-0">
        <section class="bg-white p-6 flex justify-between items-center w-full lg:w-4/12 lg:mx-auto">
            <Bars3BottomLeftIcon class="w-10" />

            <div class="w-10 h-10 bg-indigo-500 rounded-lg overflow-hidden">
                <img :src="getAvatar" class="translate-y-1" />
            </div>
        </section>
    </header>

    <!-- jumbotron -->
    <section class="mb-8 mt-16">
        <h1 class="text-3xl font-semibold text-dark-gray mb-6">
            Hey {{ getFirstName }} <br>
            Find your dream job
        </h1>

        <section class="flex gap-3 justify-between">
            <!-- searchbar -->
            <div class="w-10/12 rounded-full overflow-hidden bg-misty-gray flex">
                <!-- icon -->
                <div class="p-4">
                    <MagnifyingGlassIcon class="w-6 text-gray-400" />
                </div>

                <!-- field -->
                <input type="search" class="w-full rounded-full bg-misty-gray px-2 focus:outline-none"
                    placeholder="Search here" />
            </div>

            <!-- setting -->
            <button class=" bg-red-400 w-2/12 grid place-items-center rounded-2xl">
                <AdjustmentsVerticalIcon class="w-8 text-gray-50" />
            </button>
        </section>
    </section>

    <!-- featured card -->
    <section class="mb-8">
        <!-- title -->
        <section class="flex justify-between items-center mb-3">
            <p class="text-2xl font-semibold text-dark-gray">Popular job</p>

            <p class="text-slate-500 text-md">See all</p>
        </section>

        <!-- cards -->
        <section class="overflow-scroll flex gap-3 pb-3">
            <template v-for="(job, index) in getJobs" :key="index">
                <!-- card -->
                <div :class="index % 2 === 0 ? 'bg-pastel-blue' : 'bg-pastel-green'"
                    class="min-w-[15rem] p-3 rounded-2xl">
                    <!-- company -->
                    <div class="flex gap-3 items-center mb-5">
                        <!-- icon -->
                        <div :class="index % 2 === 0 ? 'bg-sky-blue' : 'bg-seafoam-green'"
                            class="w-16 h-16 p-2 rounded-xl grid place-items-center">
                            <i :class="job.companyIcon" class="text-gray-50 text-4xl"></i>
                        </div>

                        <!-- name and city -->
                        <div>
                            <p class="text-gray-50 text-xl font-medium">{{ job.company }}</p>
                            <p class="text-sm text-gray-50">{{ job.city }}</p>
                        </div>
                    </div>

                    <!-- job -->
                    <div class="px-1 mb-3">
                        <p class="text-gray-50 text-xl font-medium mb-2 truncate ...">{{ job.title }}</p>
                        <p class="text-sm text-gray-50">{{ job.sallary }}</p>
                    </div>

                    <!-- footer -->
                    <div class="px-1 flex justify-between items-center">
                        <span class="text-gray-50 inline-block px-4 py-1 rounded-full text-sm font-semibold"
                            :class="index % 2 === 0 ? 'bg-sky-blue' : 'bg-seafoam-green'">
                            {{ job.type }}
                        </span>

                        <p class="text-sm text-gray-50">
                            {{ moment(job.expiredAt).fromNow(true) }} left
                        </p>
                    </div>
                </div>
            </template>
        </section>
    </section>

    <!-- popular job -->
    <section>
        <!-- title -->
        <section class="flex justify-between items-center mb-3">
            <p class="text-2xl font-semibold text-dark-gray">Recent job</p>

            <p class="text-slate-500 text-md">See all</p>
        </section>

        <section class="flex flex-col gap-3">
            <template v-for="(job, index) in getJobs" :key="index">
                <!-- card -->
                <div
                    class="px-2 py-3 rounded-2xl bg-white shadow-lg hover:shadow-none duration-200 hover:bg-misty-gray flex gap-3 items-center justify-between">
                    <!-- icon -->
                    <div class="w-16 h-16 p-2 rounded-xl grid place-items-center bg-misty-gray"
                        :class="index % 2 === 0 ? 'text-sky-blue' : 'text-seafoam-green'">
                        <i :class="job.companyIcon" class="text-4xl"></i>
                    </div>

                    <!-- company -->
                    <div>
                        <p class="text-base text-dark-gray font-medium mb-1">
                            {{ job.title }}
                        </p>
                        <p class="text-xs mb-2">
                            {{ job.city }} | {{ job.sallary }}
                        </p>

                        <!-- footer -->
                        <div class="flex justify-between items-center gap-2">
                            <span class="text-gray-60 inline-block px-3 py-1 rounded-full text-xs bg-misty-gray">
                                Exp: {{ job.experienceInYear }} year
                            </span>

                            <span class="text-gray-60 inline-block px-3 py-1 rounded-full text-xs bg-misty-gray">
                                {{ job.type }}
                            </span>
                        </div>
                    </div>

                    <p class="text-xs text-gray-60">
                        {{ moment(job.expiredAt).fromNow(true) }} left
                    </p>
                </div>
            </template>
        </section>
    </section>
</template>

<script setup lang="ts">

import { useJobStore } from '@/stores/job';
import { useUserStore } from '@/stores/user';
import { Bars3BottomLeftIcon } from '@heroicons/vue/16/solid';
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon } from '@heroicons/vue/24/outline';
import moment from 'moment';

// initials
const { getAvatar, getFirstName } = useUserStore()
const { getJobs } = useJobStore()

</script>