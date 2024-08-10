export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('tokens');
    if (token.value) {
        return '/';
    }
}
)
