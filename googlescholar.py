from bs4 import BeautifulSoup
import requests

def find_jobs():
    html_text = requests.get('https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=spatial&btnG=').text
    soup = BeautifulSoup(html_text, 'lxml')
    # print(soup.prettify())
    articles = soup.find_all('div', class_='gs_ri')
    with open('scholar.txt', 'a') as file:
        for article in articles:
            div_content = article.find('div', class_='gs_a').text
            split_content = div_content.split('- ')
            if len(split_content) >= 3:
                author = split_content[0]
                publication_and_year = split_content[1]
                website = split_content[2]

                # Split publication and year
                pub_year_split = publication_and_year.split(', ')
                if len(pub_year_split) == 2:
                    publication = pub_year_split[0]
                    year = pub_year_split[1]
                elif len(pub_year_split) == 1:
                    # Check if it is a year or a publication name
                    if pub_year_split[0].isdigit():
                        publication = ''
                        year = pub_year_split[0]
                    else:
                        publication = pub_year_split[0]
                        year = ''
                else:
                    publication = ''
                    year = ''

                file.write(f"Author: {author.strip()}, ")
                file.write(f"Publication: {publication.strip()}, ")
                file.write(f"Year: {year.strip()}, ")
                file.write(f"Website: {website.strip()}")
                file.write('\n')  # Add an empty line for better readability
            else:
                file.write("Format not as expected for:", div_content)
find_jobs()
