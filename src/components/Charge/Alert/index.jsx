import Icon from './Icon'

const Alert = ({ details }) => {
    const getTimeLeft = () => {
        if (details.timeLeft < 60)
            return `${details.timeLeft} minutes`
        return `${Math.round(details.timeLeft / 6) / 10} hours`
    }

    const message = () => {
        let icon, text
        if (details.isCharging) {
            if (details.percentage === 100) {
                text = 'Charging completed'
                icon = 'completed'
            }
            else {
                text = `Full charge in ${getTimeLeft()}`
                icon = 'progress'
            }
        }
        else if (details.percentage < 20) {
            text = 'Battery low, please connect to a charger'
            icon = 'warning'
        }
        return { icon, text}
    }

    return (
        message().text &&
        <div className="flex items-center gap-x-2 p-3 rounded-lg bg-secondary text-font-dark">
            <Icon icon={message().icon} />

            <span>
                {message().text}
            </span>
        </div>
    )    
}

export default Alert