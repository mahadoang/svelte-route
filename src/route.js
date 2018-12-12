import roadtrip from 'roadtrip';

export const Route = (ComponentContainer,target_id) => {
    return {
        enter(route, route_previous) 
        {
            this.component = new ComponentContainer({
                target: document.getElementById(target_id),
                data:{params:route.params}
            });
        },

        leave(route, route_next) 
        {
            if(this.component)
            {
                this.component.destroy();
            }
        }
    }
};