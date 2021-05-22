function revokeSf() {
    return window.sf;
}
function setTheme(isDark) {
    const main = document.getElementById('main_content');
    if (!isDark) {
        const darkers = main.querySelectorAll('.theme--dark') || [];
        darkers.forEach(x => {
            x.classList.remove('theme--dark');
            x.classList.add('theme--light');
        });
    }
    else {
        const darkers = main.querySelectorAll('.theme--light') || [];
        darkers.forEach(x => {
            x.classList.remove('theme--light');
            x.classList.add('theme--dark');
        });
    }
    if (revokeSf().services.onThemeChange) {
        revokeSf().services.onThemeChange(isDark);
    }
}
const defineSf = (Vue, props, services) => {
    window.Vue = Vue;
    window.sf = window.sf || {
        i18n: props.i18n,
        services
    };
    window.sf.vue = new Vue(props).$mount('#app');
    window.sf.services.dialog = window.sf.vue.$dialog;
    window.sf.services.setTheme = setTheme;
    return revokeSf().vue;
};
const setServices = (services) => {
    window.sf = window.sf ? { ...window.sf, services } : { services };
};
export { setServices, revokeSf, defineSf };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsU0FBUyxRQUFRO0lBQ2YsT0FBTyxNQUFNLENBQUMsRUFBUSxDQUFBO0FBQ3hCLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxNQUFlO0lBQy9CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFckQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTdELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELElBQUksUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtRQUNyQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNDO0FBQ0gsQ0FBQztBQUVELE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUN4QyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUk7UUFDdkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLFFBQVE7S0FDVCxDQUFDO0lBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDbEQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUV2QyxPQUFPLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUN4QixDQUFDLENBQUE7QUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQWlCLEVBQUUsRUFBRTtJQUN4QyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQTtBQUVELE9BQU8sRUFDTCxXQUFXLEVBQ1gsUUFBUSxFQUNSLFFBQVEsRUFFVCxDQUFDIn0=