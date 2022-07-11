const play = (e) => {
    const audioId = e.target.classList[1]
    const audio = document.getElementById(audioId)
    if (!audio.paused) return audio.pause()
    return audio.play()
}

const buttons = document.querySelectorAll('.soundButton')
buttons.forEach(button => button.addEventListener('click', play))
