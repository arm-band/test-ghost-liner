window.addEventListener('load', () => {
    document.querySelector('#origin').addEventListener('blur', (e) => {
        document.querySelector('#converted').value = e.currentTarget.value
                                                        .replace(/(\u200B|\u0020|\u00A0)/g, ' ')
                                                        .replace(
                                                            /[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,
                                                            ''
                                                        )
                                                        .replace(
                                                            /[^\.\n]\r?\n/ig,
                                                            ' '
                                                        );
    });
});
