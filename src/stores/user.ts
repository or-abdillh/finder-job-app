import type { User } from "@/types/global";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user-store", () => {

    // initials
    const user = ref<User>({
        name: "Rakib Binder",
        avatar: "/assets/man.png"
    })

    // getters
    const getName = computed(() => user.value.name)
    const getAvatar = computed(() => user.value.avatar)
    const getFirstName = computed(() => user.value.name.split(" ")[0])

    return {
        user,
        getName,
        getAvatar,
        getFirstName
    }
})