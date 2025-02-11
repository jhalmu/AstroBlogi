import sanitizeHtml from 'sanitize-html';

export function getContentPreview(content)
{
    // Sanitize input content
    const sanitizedContent = sanitizeHtml(content, {
        allowedTags: [],
        allowedAttributes: {}
    });

    // Remove HTML tags and markdown syntax
    const cleanText = sanitizedContent
        .replace(/[#*`_~\[\]]/g, '') // Remove markdown syntax
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim()

    // Get first 160 characters, try to end at a complete sentence or word
    const maxLength = 80
    if (cleanText.length <= maxLength) return cleanText

    const truncated = cleanText.slice(0, maxLength)
    const lastPeriod = truncated.lastIndexOf('.')
    const lastSpace = truncated.lastIndexOf(' ')

    // Try to end at a sentence, otherwise end at a word
    const endIndex = lastPeriod > maxLength * 0.5 ? lastPeriod + 1 : lastSpace
    return truncated.slice(0, endIndex) + '...'
}